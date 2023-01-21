namespace SPA.Domain;

using Entities;

public sealed class TutorContact
{
    public Guid Id { get; init; }
    
    public ContactType Type { get; init; }
    
    public string Value { get; init; }
}