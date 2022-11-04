namespace SPA.Models;

public sealed class Award
{
    public int Id { get; init; }
    
    public string Description { get; init; }
    public int Year { get; init; }
    
    public Award()
    {
    }
}