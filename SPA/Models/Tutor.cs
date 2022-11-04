using System.ComponentModel.DataAnnotations;

namespace SPA.Models;

public sealed class Tutor
{
    public Tutor()
    {
    }

    public int Id { get; set; }

    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }

    [Required]
    public string MiddleName { get; set; }

    public string Location { get; set; }

    public string Requirements { get; set; }
    
    public double Rating { get; set; }

    public Uri Avatar { get; set; }

    public string JobPlace { get; set; }
    
    public string JobPost { get; set; }

    public List<string> Subjects { get; set; }

    public List<Contact> Contacts { get; set; }

    public List<Education> Educations { get; set; }

    public List<Award> Awards { get; set; }
}