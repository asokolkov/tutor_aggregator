namespace SPA.Entities;

internal sealed class AwardEntity
{
    public Guid Id { get; init; }
    
    public string Description { get; init; }
    
    public int Year { get; init; }
}