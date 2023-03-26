namespace SPA.Domain;

#nullable enable

public sealed class Tutor
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }
    
    public int? Age { get; set; }

    public double Rating { get; set; }

    public string? Job { get; set; }

    public string? Description { get; set; }
    
    public Location? Location { get; set; }
    
    public ICollection<Education> Educations { get; init; }
    
    public ICollection<Award> Awards { get; init; }
    
    public ICollection<Requirement> Requirements { get; init; }
    
    public ICollection<TutorContact> Contacts { get; init; }

    public ICollection<Subject> Subjects { get; init; }
    
    public ICollection<Lesson> Lessons { get; init; }
    
    public ICollection<Review> Reviews { get; init; }
}