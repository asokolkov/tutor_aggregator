namespace SPA.Domain;

public sealed class Review
{
    public Guid Id { get; init; }

    public double Rating { get; init; }

    public string Description { get; init; }

    public DateTimeOffset UpdatedAt { get; init; }

    public Guid TutorId { get; init; }

    public Guid StudentId { get; init; }

    public string StudentFirstName { get; init; }
}