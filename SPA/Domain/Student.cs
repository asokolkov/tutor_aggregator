namespace SPA.Domain;

#nullable enable

public sealed class Student
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }
    
    public int? Age { get; set; }

    public string? Description { get; set; }
    
    public string? EducationPlace { get; set; }
    
    public int? Grade { get; set; }
    
    public ICollection<StudentContact> Contacts { get; init; }

    public ICollection<Lesson> Lessons { get; init; }

    public ICollection<Review> Reviews { get; init; }
}