namespace SPA.Domain;

public sealed class Award
{
    public Guid Id { get; init; }
    
    public string Description { get; init; }
    
    public int Year { get; init; }
}