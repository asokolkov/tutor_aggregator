namespace EFCore.Postgres.Application.Models.Entities;

public sealed class TutorEducationEntity
{
    public Guid Id { get; init; }
    
    public string Value { get; init; }
}