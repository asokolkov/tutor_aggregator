#nullable enable

using SPA.Domain;

namespace SPA.Repositories;

internal interface ILessonsRepository
{
    Task<Lesson?> GetAsync(Guid id);
    Task<ICollection<Lesson>> GetStudentLessonsAsync(Guid studentId);
    Task<ICollection<Lesson>> GetTutorLessonsAsync(Guid tutorId, DateTimeOffset date);
    Task<Lesson?> InsertAsync(Guid tutor, Lesson lesson);
    Task<Lesson?> MakeBookedAsync(Guid studentId, Guid lessonId);
    Task<Lesson?> MakeDeletedAsync(Guid id);
}