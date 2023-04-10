#nullable enable

namespace SPA.Domain;

public sealed class Student
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public int? Age { get; set; }

    public string? Description { get; set; }

    public StudentEducation? Education { get; set; }

    public ICollection<StudentContact> Contacts { get; init; }

    public ICollection<Lesson> Lessons { get; init; }

    public ICollection<Review> Reviews { get; init; }
}