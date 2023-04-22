using SPA.Domain;

namespace SPA.V1.DataModels;

public sealed class V1CreateLessonDto
{
    public DateTimeOffset Start { get; init; }

    public DateTimeOffset End { get; init; }

    public int Price { get; init; }

    public LessonType Type { get; init; }
}