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

    public string Requirements { get; init; }

    public Uri Avatar { get; init; }
    
    public Location Location { get; init; }

    public Job Job { get; init; }

    public IReadOnlyCollection<Subject> Subjects { get; init; } = new List<Subject>();

    public IReadOnlyCollection<Contact> Contacts { get; init; } = new List<Contact>();

    public IReadOnlyCollection<Education> Educations { get; init; } = new List<Education>();

    public IReadOnlyCollection<Award> Awards { get; init; } = new List<Award>();

    public IReadOnlyCollection<Lesson> Lessons { get; init; } = new List<Lesson>();
    
    public IReadOnlyCollection<Review> Reviews { get; init; } = new List<Review>();
}