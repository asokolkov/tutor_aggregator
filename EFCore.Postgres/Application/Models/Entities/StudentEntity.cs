namespace EFCore.Postgres.Application.Models.Entities;

public sealed class StudentEntity
{
    public Guid Id { get; init; }

    public string FirstName { get; init; }

    public string LastName { get; init; }
    
    public int Age { get; set; }

    public string Contacts { get; init; }

    public ICollection<LessonEntity> Lessons { get; init; }
    
    public ICollection<ReviewEntity> Reviews { get; init; }
}