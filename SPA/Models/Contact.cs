using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Contact
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }
    
    public ContactType Type { get; init; }
    
    public string Value { get; init; }
}