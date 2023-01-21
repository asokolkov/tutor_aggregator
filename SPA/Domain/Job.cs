namespace SPA.Domain;

public sealed class Job
{
    public Guid Id { get; init; }

    public string Place { get; init; }

    public string Post { get; init; }
}