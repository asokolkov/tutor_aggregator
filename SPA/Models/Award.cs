namespace SPA.Models;

public sealed class Award : IEntity
{
    public int Id { get; init; }
    
    public string Description { get; init; }
    
    public int Year { get; init; }
}