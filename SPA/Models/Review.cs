namespace SPA.Models;

public sealed class Review
{
    public int Id { get; init; }
    
    public double Rating { get; init; }
    
    public string Description { get; init; }
    
    public DateTimeOffset UpdatedAt { get; init; }
}