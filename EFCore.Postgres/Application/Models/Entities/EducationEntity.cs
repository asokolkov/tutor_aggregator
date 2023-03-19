namespace EFCore.Postgres.Application.Models.Entities;

public sealed class EducationEntity
{
    public Guid Id { get; init; }
    
    public string Value { get; init; }
}