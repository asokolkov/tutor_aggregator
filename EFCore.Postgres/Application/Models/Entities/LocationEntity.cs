namespace EFCore.Postgres.Application.Models.Entities;

public sealed class LocationEntity
{
    public Guid Id { get; init; }

    public string City { get; init; }

    public string District { get; init; }

    public IReadOnlyCollection<TutorEntity> Tutors { get; init; }
}