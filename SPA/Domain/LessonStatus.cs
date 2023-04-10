namespace SPA.Domain;

public enum LessonStatus : byte
{
    Empty,
    Booked,
    Finished,
    Deleted,
    ExpiredEmpty,
    ExpiredBooked
}