namespace SPA.Entities;

internal sealed class TutorEntity
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public double Rating { get; set; }
    
    public LocationEntity Location { get; set; }

    public string Requirements { get; set; }

    public string Job { get; set; }
    
    public string Educations { get; set; }

    public string Awards { get; set; }
    
    public string Contacts { get; set; }

    public ICollection<SubjectEntity> Subjects { get; set; }
    
    public ICollection<LessonEntity> Lessons { get; init; }
    
    public ICollection<ReviewEntity> Reviews { get; init; }
}