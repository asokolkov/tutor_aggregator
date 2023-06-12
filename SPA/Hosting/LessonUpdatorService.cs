namespace SPA.Startup;

using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Hosting.Schedule;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using NCrontab;

[UsedImplicitly]
internal sealed class LessonUpdatorService : ScheduledService
{
    private readonly IServiceProvider serviceProvider;
    private readonly ISystemClock systemClock;

    public LessonUpdatorService(ISystemClock systemClock, IServiceProvider serviceProvider)
    {
        this.systemClock = systemClock;
        this.serviceProvider = serviceProvider;
    }

    protected override CrontabSchedule Schedule => CrontabSchedule.Parse("0 * * * * *", new CrontabSchedule.ParseOptions
    {
        IncludingSeconds = true
    });

    protected override async Task ExecuteAsync(CancellationToken cancellationToken)
    {
        using var scope = serviceProvider.CreateScope();
        await using var context = scope.ServiceProvider.GetRequiredService<ApplicationContext>();
        var lessons = await context.Lessons
            .Where(e => e.End < systemClock.UtcNow)
            .Where(e => e.Status == LessonStatus.Booked || e.Status == LessonStatus.Empty)
            .ToArrayAsync(cancellationToken);
        foreach (var lesson in lessons)
        {
            lesson.Status = lesson.Status switch
            {
                LessonStatus.Booked => LessonStatus.ExpiredBooked,
                LessonStatus.Empty => LessonStatus.ExpiredEmpty,
                _ => lesson.Status
            };
            context.Lessons.Update(lesson);
        }

        await context.SaveChangesAsync(cancellationToken);
    }
}