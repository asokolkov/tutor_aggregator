namespace SPA.Models;

public sealed class StudentContact : IEntity
{
    public int Id { get; init; }
    
    public ContactType Type { get; init; }
    
    public string Value { get; init; }
}