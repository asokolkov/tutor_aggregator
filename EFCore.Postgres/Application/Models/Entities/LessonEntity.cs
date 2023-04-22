#nullable enable

namespace EFCore.Postgres.Application.Models.Entities;

public sealed class LessonEntity
{
    public Guid Id { get; init; }

    public int Price { get; init; }

    public LessonStatus Status { get; set; }

    public LessonType Type { get; set; }

    public DateTimeOffset Start { get; init; }

    public DateTimeOffset End { get; init; }

    public TutorEntity Tutor { get; set; }

    public StudentEntity? Student { get; set; }
}