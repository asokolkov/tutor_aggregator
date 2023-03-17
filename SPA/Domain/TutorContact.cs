namespace SPA.Domain;

public sealed class TutorContact
{
    public Guid Id { get; init; }
    
    public ContactType Type { get; init; }
    
    public string Value { get; init; }
}