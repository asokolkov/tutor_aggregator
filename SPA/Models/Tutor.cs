using System.ComponentModel.DataAnnotations;

namespace SPA.Models;

public sealed class Tutor
{
    public int Id { get; init; }
    [Required]
    public string FirstName { get; init; }
    [Required]
    public string LastName { get; init; }
    [Required]
    public string MiddleName { get; init; }
    public string Location { get; init; }
    public string Requirements { get; init; }
    public double Rating { get; init; }
    public Uri Avatar { get; init; }
    public string JobPlace { get; init; }
    public string JobPost { get; init; }
    public List<string> Subjects { get; init; }
    public List<Contact> Contacts { get; init; }
    public List<Education> Educations { get; init; }
    public List<Award> Awards { get; init; }
    
    public Tutor()
    {
    }
}