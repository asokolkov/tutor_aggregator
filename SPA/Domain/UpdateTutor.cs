namespace SPA.Domain;

internal sealed class UpdateTutor
{
    public string FirstName { get; set; }

    public string LastName { get; set; }
    
    public int Age { get; set; }

    public Location Location { get; set; }

    public string Job { get; set; }

    public string Description { get; set; }
    
    public ICollection<TutorEducation> Educations { get; set; }
    
    public ICollection<Award> Awards { get; set; }
    
    public ICollection<Requirement> Requirements { get; set; }
    
    public ICollection<TutorContact> Contacts { get; set; }

    public ICollection<Subject> Subjects { get; init; }
}