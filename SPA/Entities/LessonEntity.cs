using JetBrains.Annotations;

namespace SPA.Entities;

#nullable enable

internal sealed class LessonEntity
{
    public Guid Id { get; init; }
    
    public double Price { get; init; }
    
    public LessonStatus Status { get; set; }
    
    public DateTimeOffset Start { get; init; }
    
    public DateTimeOffset End { get; init; }

    public TutorEntity Tutor { get; init; }
    
    public StudentEntity? Student { get; set; }
}