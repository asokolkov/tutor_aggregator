namespace SPA.Domain;

public sealed class UpdateStudent
{
    public string FirstName { get; init; }

    public string LastName { get; init; }

    public int Age { get; init; }

    public string Description { get; init; }

    public StudentEducation Education { get; init; }

    public ICollection<StudentContact> Contacts { get; set; }
}