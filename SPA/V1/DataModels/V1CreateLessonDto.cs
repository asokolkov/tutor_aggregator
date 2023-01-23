namespace SPA.V1.DataModels;

public sealed class V1CreateLessonDto
{
    public DateTimeOffset Start { get; init; }
    public DateTimeOffset End { get; init; }
    public double Price { get; init; }
}