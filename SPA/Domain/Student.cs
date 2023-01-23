namespace SPA.Domain;

public sealed class Student
{
    public Guid Id { get; init; }

    public string FirstName { get; set; }

    public string LastName { get; set; }
    
    public Uri Avatar { get; set; }

    public ICollection<StudentContact> Contacts { get; init; }
    
    public ICollection<Review> Reviews { get; init; }
}