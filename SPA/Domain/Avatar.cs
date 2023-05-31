namespace SPA.Domain;

public sealed class Avatar
{
    public Guid Id { get; init; }

    public byte[] Image { get; init; }
}