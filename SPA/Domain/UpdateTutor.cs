namespace SPA.Domain;

internal sealed class UpdateTutor
{
    public string FirstName { get; init; }

    public string LastName { get; init; }
    
    public string Requirements { get; init; }
    
    public Location Location { get; init; }
    
    public Job Job { get; init; }
    
    public ICollection<Subject> Subjects { get; init; }
    
    public ICollection<TutorContact> Contacts { get; init; }

    public ICollection<Education> Educations { get; init; }
    
    public ICollection<Award> Awards { get; init; }
}