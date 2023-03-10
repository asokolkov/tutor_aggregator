namespace EFCore.Postgres.Application.Models.Entities;

public sealed class SubjectEntity
{
    public Guid Id { get; init; }
    
    public string Description { get; init; }

    public IReadOnlyCollection<TutorEntity> Tutors { get; init; }
}