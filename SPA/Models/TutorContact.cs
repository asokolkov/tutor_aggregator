namespace SPA.Models;

public sealed class TutorContact : IEntity
{
    public int Id { get; init; }
    
    public ContactType Type { get; init; }
    
    public string Value { get; init; }
}