namespace SPA.Hosting.Schedule;

using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using NCrontab;

internal abstract class ScheduledService : IHostedService
{
    private static readonly TimeSpan MinWaitInterval = TimeSpan.FromMilliseconds(1);

    private readonly CancellationTokenSource stoppingCts = new();
    private Task? executingTask;

    public Task StartAsync(CancellationToken cancellationToken)
    {
        executingTask = TryStartScheduleAsync(stoppingCts.Token);

        return executingTask.IsCompleted
            ? executingTask
            : Task.CompletedTask;
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        if (executingTask == null)
            return;

        try
        {
            stoppingCts.Cancel();
        }
        finally
        {
            await Task.WhenAny(executingTask, Task.Delay(Timeout.Infinite, cancellationToken))
                .ConfigureAwait(false);
        }
    }

    public void Dispose()
    {
        stoppingCts.Cancel();
    }

    protected abstract CrontabSchedule Schedule { get; }

    protected abstract Task ExecuteAsync(CancellationToken cancellationToken);

    private async Task TryStartScheduleAsync(CancellationToken cancellationToken)
    {
        try
        {
            await StartScheduleAsync(cancellationToken)
                .ConfigureAwait(false);
        }
        catch (Exception ex)
        {
            if (cancellationToken.IsCancellationRequested && ex is OperationCanceledException)
                return;
            
            throw;
        }
    }

    private async Task StartScheduleAsync(CancellationToken cancellationToken)
    {
        if (Schedule == null)
            throw new ArgumentNullException(nameof(Schedule));

        while (!cancellationToken.IsCancellationRequested)
        {
            var now = DateTime.UtcNow;
            var nextOccurrence = Schedule.GetNextOccurrence(now);
            var waitTime = Math.Max(MinWaitInterval, nextOccurrence - now);
            while (!cancellationToken.IsCancellationRequested && now < nextOccurrence)
            {
                await Task.Delay(waitTime, cancellationToken)
                    .ConfigureAwait(false);

                now = DateTime.UtcNow;
                waitTime = Math.Max(nextOccurrence - now, MinWaitInterval);
            }

            try
            {
                await ExecuteAsync(stoppingCts.Token)
                    .ConfigureAwait(false);
            }
            catch (Exception)
            {
                // ignored
            }
        }
    }
}