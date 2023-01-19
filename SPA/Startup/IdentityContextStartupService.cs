namespace SPA.Startup;

using Microsoft.EntityFrameworkCore;

internal sealed class DatabaseStartupService<TContext> : IHostedService
    where TContext : DbContext
{
    private readonly ILogger logger;
    private readonly IServiceProvider serviceProvider;

    public DatabaseStartupService(ILogger<DatabaseStartupService<TContext>> logger, IServiceProvider serviceProvider)
    {
        this.logger = logger;
        this.serviceProvider = serviceProvider;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        try
        {
            await using var scope = serviceProvider.CreateAsyncScope();
            await using var applicationContext = scope.ServiceProvider
                .GetRequiredService<TContext>();

            var created = await applicationContext.Database.EnsureCreatedAsync(cancellationToken);
            if (created)
            {
                logger.LogInformation("{DbContextType} database was created successfully", nameof(TContext));
            }
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Unable to create database");
        }
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}