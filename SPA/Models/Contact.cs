namespace SPA.Models;

public sealed class Contact
{
    public int Id { get; set; }
    
    public ContactType Type { get; set; }
    
    public string Value { get; set; }
}