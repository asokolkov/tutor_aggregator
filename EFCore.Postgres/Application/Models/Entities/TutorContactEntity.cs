namespace EFCore.Postgres.Application.Models.Entities;

public sealed class TutorContactEntity
{
    public Guid Id { get; init; }
    
    public ContactType Type { get; init; }
    
    public string Value { get; init; }
}