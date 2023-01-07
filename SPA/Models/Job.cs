namespace SPA.Models;

public sealed class Job : IEntity
{
    public int Id { get; init; }
    
    public string Place { get; init; }

    public string Post { get; init; }
}