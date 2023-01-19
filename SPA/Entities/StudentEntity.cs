namespace SPA.Entities;

internal sealed class StudentEntity
{
    public Guid Id { get; init; }

    public string FirstName { get; init; }

    public string LastName { get; init; }

    public Uri Avatar { get; init; }

    public ICollection<StudentContactEntity> Contacts { get; init; }

    public ICollection<LessonEntity> Lessons { get; init; }
    
    public ICollection<ReviewEntity> Reviews { get; init; }
}