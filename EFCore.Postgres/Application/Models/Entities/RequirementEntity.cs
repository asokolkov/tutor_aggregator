namespace EFCore.Postgres.Application.Models.Entities;

public sealed class RequirementEntity
{
    public Guid Id { get; init; }

    public string Value { get; init; }
}