namespace SPA.Domain;

internal sealed class UpdateTutor
{
    public string FirstName { get; init; }

    public string LastName { get; init; }
    
    public string Requirements { get; init; }
    
    public Location Location { get; init; }
    
    public string Job { get; init; }
    
    public string Contacts { get; init; }

    public string Educations { get; init; }
    
    public string Awards { get; init; }
    
    public ICollection<Subject> Subjects { get; init; }
}