namespace EFCore.Postgres.Application.Models.Entities;

public sealed class AvatarEntity
{
    public Guid Id { get; init; }

    public byte[] Image { get; init; }
}