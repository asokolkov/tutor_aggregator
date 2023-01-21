namespace SPA.Domain;

public sealed class Tutor
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public double Rating { get; set; }

    public string Requirements { get; set; }

    public Uri Avatar { get; set; }
    
    public Location Location { get; set; }

    public Job Job { get; set; }

    public ICollection<Subject> Subjects { get; init; }

    public ICollection<TutorContact> Contacts { get; init; }

    public ICollection<Education> Educations { get; init; }

    public ICollection<Award> Awards { get; init; }

    public ICollection<Lesson> Lessons { get; init; }
    
    public ICollection<Review> Reviews { get; init; }
}