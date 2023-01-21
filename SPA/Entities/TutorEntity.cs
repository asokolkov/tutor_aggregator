namespace SPA.Entities;

internal sealed class TutorEntity
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public double Rating { get; set; }

    public string Requirements { get; set; }

    public Uri Avatar { get; set; }
    
    public LocationEntity Location { get; set; }

    public JobEntity Job { get; set; }

    public ICollection<SubjectEntity> Subjects { get; init; }

    public ICollection<TutorContactEntity> Contacts { get; init; }

    public ICollection<EducationEntity> Educations { get; init; }

    public ICollection<AwardEntity> Awards { get; init; }

    public ICollection<LessonEntity> Lessons { get; init; }
    
    public ICollection<ReviewEntity> Reviews { get; init; }
}