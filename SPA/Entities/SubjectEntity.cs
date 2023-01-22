namespace SPA.Entities;

internal sealed class SubjectEntity
{
    public Guid Id { get; init; }
    
    public string Description { get; init; }

    public IReadOnlyCollection<TutorEntity> Tutors { get; init; }
}