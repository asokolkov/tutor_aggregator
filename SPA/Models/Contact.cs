namespace SPA.Models;

public sealed class Contact
{
    public int Id { get; init; }
    
    public ContactType Type { get; init; }
    public string Value { get; init; }
}