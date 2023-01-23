namespace SPA.Domain;

public sealed class Student
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }
    
    public int Age { get; set; }

    public string Contacts { get; set; }

    public ICollection<Lesson> Lessons { get; init; }
    
    public ICollection<Review> Reviews { get; init; }
}