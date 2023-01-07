namespace SPA.Models;

public sealed class Subject : IEntity
{
    public int Id { get; init; }
    
    public string Description { get; init; }
}