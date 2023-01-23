namespace SPA.Entities;

internal sealed class AvatarEntity
{
    public Guid Id { get; init; }

    public byte[] Image { get; init; }
}