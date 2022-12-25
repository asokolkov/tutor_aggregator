namespace SPA.Models;

public sealed class StudentContact
{
    public int Id { get; init; }
    
    public ContactType Type { get; init; }
    
    public string Value { get; init; }
}