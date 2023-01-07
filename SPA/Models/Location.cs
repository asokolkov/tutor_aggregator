namespace SPA.Models;

public sealed class Location : IEntity
{
    public int Id { get; init; }
    
    public string City { get; init; }
    
    public string District { get; init; }
}