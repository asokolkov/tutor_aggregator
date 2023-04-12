#nullable enable

using JetBrains.Annotations;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Services.Impl;

[UsedImplicitly]
internal sealed class LessonsManager : ILessonsManager
{
    private readonly ILessonsRepository lessonsRepository;
    private readonly IStudentsRepository studentsRepository;
    
    public LessonsManager(ILessonsRepository lessonsRepository, IStudentsRepository studentsRepository)
    {
        this.lessonsRepository = lessonsRepository;
        this.studentsRepository = studentsRepository;
    }
    
    public async Task<Lesson?> BookAsync(Guid studentId, Guid lessonId)
    {
        return await lessonsRepository.MakeBookedAsync(studentId, lessonId);
    }

    public async Task<Lesson?> CreateAsync(Guid tutorId, double price, LessonType type, DateTimeOffset start, DateTimeOffset end)
    {
        var lesson = new Lesson
        {
            Id =Guid.NewGuid(),
            Price = price,
            Status = LessonStatus.Empty,
            Type = type,
            Start = start.ToOffset(TimeSpan.Zero),
            End = end.ToOffset(TimeSpan.Zero)
        };
        
        return await lessonsRepository.InsertAsync(tutorId, lesson);
    }
    
    public async Task<Lesson?> DeleteAsync(Guid id)
    {
        return await lessonsRepository.MakeDeletedAsync(id);
    }
}