namespace EFCore.Postgres.Application.Models.Entities;


public sealed class ReviewEntity
{
    public Guid Id { get; init; }
    
    public double Rating { get; init; }
    
    public string Description { get; init; }
    
    public DateTimeOffset UpdatedAt { get; init; }
    
    public TutorEntity Tutor { get; init; }
    
    public StudentEntity Student { get; init; }
}