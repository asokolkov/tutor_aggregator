namespace EFCore.Postgres.Application.Models.Entities;

public enum LessonStatus : byte
{
    Canceled, 
    Held, 
    Scheduled
}