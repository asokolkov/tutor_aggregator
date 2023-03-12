using JetBrains.Annotations;

namespace SPA.Domain;

public sealed class Tutor
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public double Rating { get; set; }
    
    [CanBeNull] public Location Location { get; set; }

    [CanBeNull] public string Requirements { get; set; }

    [CanBeNull] public string Job { get; set; }
    
    [CanBeNull] public string Educations { get; set; }

    [CanBeNull] public string Awards { get; set; }
    
    [CanBeNull] public string Contacts { get; init; }

    public ICollection<Subject> Subjects { get; init; }
    
    public ICollection<Lesson> Lessons { get; init; }
    
    public ICollection<Review> Reviews { get; init; }
}