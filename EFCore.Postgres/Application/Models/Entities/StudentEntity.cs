namespace EFCore.Postgres.Application.Models.Entities;

public sealed class StudentEntity
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }
    
    public int Age { get; set; }

    public string? Description { get; set; }
    
    public string? EducationPlace { get; set; }
    
    public int? Grade { get; set; }
    
    public ICollection<StudentContactEntity> Contacts { get; set; }

    public ICollection<LessonEntity> Lessons { get; init; }
    
    public ICollection<ReviewEntity> Reviews { get; init; }
}