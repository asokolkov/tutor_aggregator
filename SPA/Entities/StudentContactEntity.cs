namespace SPA.Entities;

internal sealed class StudentContactEntity
{
    public Guid Id { get; init; }
    
    public ContactType Type { get; init; }
    
    public string Value { get; init; }
}