namespace SPA.Domain;

internal sealed class UpdateStudent
{
    public string FirstName { get; init; }

    public string LastName { get; init; }

    public ICollection<StudentContact> Contacts { get; init; }
}