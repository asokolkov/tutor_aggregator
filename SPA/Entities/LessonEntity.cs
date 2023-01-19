namespace SPA.Entities;

internal sealed class LessonEntity
{
    public Guid Id { get; init; }
    
    public double Price { get; init; }
    
    public bool Confirmed { get; init; }
    
    public DateTimeOffset StartTime { get; init; }
    
    public DateTimeOffset EndTime { get; init; }
}