using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Tutor
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }

    [Required] public string FirstName { get; init; }

    [Required] public string LastName { get; init; }

    [Required] public string MiddleName { get; init; }

    [Required] public double Rating { get; init; }

    public string Location { get; init; }

    public string Requirements { get; init; }

    public Uri Avatar { get; init; }

    public string JobPlace { get; init; }

    public string JobPost { get; init; }

    public IReadOnlyCollection<string> Subjects { get; init; }
    
    public IReadOnlyCollection<Contact> Contacts { get; init; }
    
    public IReadOnlyCollection<Education> Educations { get; init; }
    
    public IReadOnlyCollection<Award> Awards { get; init; }

    public Tutor()
    {
        Contacts = new List<Contact>();
        Educations = new List<Education>();
        Awards = new List<Award>();
    }
}