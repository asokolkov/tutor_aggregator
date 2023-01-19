namespace SPA.Domain;

public sealed class Review
{
    public Guid Id { get; init; }
    
    public double Rating { get; init; }
    
    public string Description { get; init; }
    
    public DateTimeOffset UpdatedAt { get; init; }
}