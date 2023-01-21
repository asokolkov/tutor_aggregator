namespace SPA.V1.DataModels;

public sealed class V1UpdateStudentDto
{
    public string FirstName { get; init; }

    public string LastName { get; init; }

    public ICollection<V1StudentContactDto> Contacts { get; init; }
}