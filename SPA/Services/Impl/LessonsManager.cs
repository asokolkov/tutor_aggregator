#nullable enable

using JetBrains.Annotations;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Services.Impl;

using Exceptions;
using Microsoft.Extensions.Internal;

[UsedImplicitly]
internal sealed class LessonsManager : ILessonsManager
{
    private readonly ILessonsRepository lessonsRepository;
    private readonly ISystemClock systemClock;

    public LessonsManager(ILessonsRepository lessonsRepository, ISystemClock systemClock)
    {
        this.lessonsRepository = lessonsRepository;
        this.systemClock = systemClock;
    }

    public async Task<Lesson?> BookAsync(Guid studentId, Guid lessonId)
    {
        var lesson = await lessonsRepository.GetAsync(lessonId);
        if (lesson == null)
            return null;
        if (lesson.Start < systemClock.UtcNow)
            throw new ConflictException("Lesson already started");
        return await lessonsRepository.MakeBookedAsync(studentId, lessonId);
    }

    public async Task<Lesson?> CreateAsync(Guid tutorId, int price, LessonType type, DateTimeOffset start,
        DateTimeOffset end)
    {
        if (price < 0)
            return null;

        var lesson = new Lesson
        {
            Id = Guid.NewGuid(),
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
        var lesson = await lessonsRepository.GetAsync(id);
        if (lesson == null)
            return null;
        if (lesson.Start < systemClock.UtcNow)
            throw new ConflictException("Lesson already started");
        return await lessonsRepository.MakeDeletedAsync(id);
    }

    public async Task<Lesson?> CancelAsync(Guid id)
    {
        var lesson = await lessonsRepository.GetAsync(id);
        if (lesson == null)
            return null;
        if (lesson.Start < systemClock.UtcNow)
            throw new ConflictException("Lesson already started");
        return await lessonsRepository.MakeEmptyAsync(id);
    }
}