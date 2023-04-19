namespace SPA.Domain;

public sealed class StudentContact
{
    public Guid Id { get; init; }

    public ContactType Type { get; init; }

    public string Value { get; init; }
}