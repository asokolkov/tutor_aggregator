namespace SPA.Startup;

using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

[UsedImplicitly]
internal sealed class DatabaseInitializationService : IHostedService
{
    private readonly IServiceProvider serviceProvider;

    public DatabaseInitializationService(IServiceProvider serviceProvider)
    {
        this.serviceProvider = serviceProvider;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using var scope = serviceProvider.CreateScope();
        await using var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationContext>();

        if (!await dbContext.Locations.AnyAsync(cancellationToken))
            await dbContext.Locations.AddRangeAsync(GetLocalDistrict(), cancellationToken);

        if (!await dbContext.Subjects.AnyAsync(cancellationToken))
            await dbContext.Subjects.AddRangeAsync(GetSubjects(), cancellationToken);

        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }

    private LocationEntity[] GetLocalDistrict()
    {
        var districts = new List<string>
        {
            "Академический",
            "Верх-Исетский",
            "Железнодорожный",
            "Кировский",
            "Ленинский",
            "Октябрьский",
            "Орджоникидзевский",
            "Чкаловский"
        };

        return districts.Select(district => new LocationEntity
            {
                City = "Екатеринбург",
                District = district,
                Id = Guid.NewGuid()
            })
            .ToArray();
    }

    private SubjectEntity[] GetSubjects()
    {
        var schoolSubjects = new[]
        {
            "Алгебра",
            "Астрономия",
            "Биология",
            "География",
            "Геометрия",
            "Естествознание",
            "Изобразительное искусство (рисование)",
            "Иностранный язык",
            "Информатика (ИКТ)",
            "История",
            "Литература",
            "Математика",
            "Обществознание",
            "Русский язык",
            "Статистика",
            "Физика",
            "Химия"
        };
        return schoolSubjects.Select(subject => new SubjectEntity
            {
                Id = Guid.NewGuid(),
                Description = subject
            })
            .ToArray();
    }
}