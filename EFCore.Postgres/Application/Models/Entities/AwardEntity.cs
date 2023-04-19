namespace EFCore.Postgres.Application.Models.Entities;

public sealed class AwardEntity
{
    public Guid Id { get; init; }

    public string Value { get; init; }
}