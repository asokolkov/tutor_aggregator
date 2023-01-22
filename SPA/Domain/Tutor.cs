using System.Reflection.Metadata;

namespace SPA.Domain;

public sealed class Tutor
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public double Rating { get; set; }

    public string Requirements { get; set; }

    public Location Location { get; set; }

    public string Job { get; set; }
    
    public string Educations { get; set; }

    public string Awards { get; set; }
    
    public string Contacts { get; init; }

    public ICollection<Subject> Subjects { get; init; }
    
    public ICollection<Lesson> Lessons { get; init; }
    
    public ICollection<Review> Reviews { get; init; }
}