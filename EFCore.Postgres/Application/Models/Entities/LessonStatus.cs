namespace EFCore.Postgres.Application.Models.Entities;

public enum LessonStatus : byte
{
    Empty,
    Booked,
    Finished,
    Deleted,
    ExpiredEmpty,
    ExpiredBooked
}