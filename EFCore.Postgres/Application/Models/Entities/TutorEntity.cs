namespace EFCore.Postgres.Application.Models.Entities;

public sealed class TutorEntity
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public double Rating { get; set; }

    public LocationEntity? Location { get; set; }

    public string? Job { get; set; }

    public string? Description { get; set; }
    
    public ICollection<EducationEntity> Educations { get; set; }
    
    public ICollection<AwardEntity> Awards { get; set; }
    
    public ICollection<RequirementEntity> Requirements { get; set; }
    
    public ICollection<TutorContactEntity> Contacts { get; set; }

    public ICollection<SubjectEntity> Subjects { get; set; }

    public ICollection<LessonEntity> Lessons { get; init; }

    public ICollection<ReviewEntity> Reviews { get; init; }
}