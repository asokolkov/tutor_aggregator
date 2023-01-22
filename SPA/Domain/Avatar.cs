namespace SPA.Domain;

internal sealed class Avatar
{
    public Guid Id { get; init; }

    public byte[] Image { get; init; }
}