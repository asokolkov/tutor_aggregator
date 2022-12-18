using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Tutor
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }

    public string FirstName { get; init; }

    public string LastName { get; init; }

    public string MiddleName { get; init; }

    public double Rating { get; init; }

    public string Requirements { get; init; }

    public Uri Avatar { get; init; }
    
    public Location Location { get; init; }

    public Job Job { get; init; }

    public ICollection<Subject> Subjects { get; init; }

    public ICollection<TutorContact> Contacts { get; init; }

    public ICollection<Education> Educations { get; init; }

    public ICollection<Award> Awards { get; init; }

    public ICollection<Lesson> Lessons { get; init; }
    
    public ICollection<Review> Reviews { get; init; }
}