namespace SPA.Domain;

public sealed class Lesson
{
    public Guid Id { get; init; }

    public double Price { get; init; }

    public LessonStatus Status { get; init; }

    public LessonType Type { get; init; }

    public DateTimeOffset Start { get; set; }

    public DateTimeOffset End { get; set; }

    public Student Student { get; init; }

    public Tutor Tutor { get; init; }
}