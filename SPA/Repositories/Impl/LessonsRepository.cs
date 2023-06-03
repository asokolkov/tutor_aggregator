#nullable enable

using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using SPA.Domain;
using LessonStatus = EFCore.Postgres.Application.Models.Entities.LessonStatus;

namespace SPA.Repositories.Impl;

internal sealed class LessonsRepository : ILessonsRepository
{
    private readonly IApplicationContext context;
    private readonly IMapper mapper;

    public LessonsRepository(IApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<Lesson?> GetAsync(Guid id)
    {
        return mapper.Map<Lesson>(await context.Lessons.FindAsync(id));
    }

    public async Task<ICollection<Lesson>> GetStudentLessonsAsync(Guid studentId)
    {
        var entities = await context.Lessons
            .Where(l => l.Student != null && l.Student.Id == studentId)
            .ToListAsync();
        return mapper.Map<ICollection<Lesson>>(entities);
    }

    public async Task<ICollection<Lesson>> GetTutorLessonsAsync(Guid tutorId, DateTimeOffset date)
    {
        var zeroTimeZoneDate = date.ToOffset(TimeSpan.Zero).UtcDateTime.Date;

        var entities = await context.Lessons
            .Where(e => 
                e.Tutor.Id == tutorId && 
                e.Start.UtcDateTime.Date == zeroTimeZoneDate &&
                (e.Status == LessonStatus.Empty || e.Status == LessonStatus.Booked))
            .ToListAsync();
        var models = mapper.Map<ICollection<Lesson>>(entities);

        foreach (var model in models)
        {
            model.Start = model.Start.ToOffset(date.Offset);
            model.End = model.End.ToOffset(date.Offset);
        }

        return models;
    }

    public async Task<Lesson?> InsertAsync(Guid tutorId, Lesson lesson)
    {
        var tutorEntity = await context.Tutors.FindAsync(tutorId);
        if (tutorEntity is null)
            return null;

        var lessonEntity = mapper.Map<LessonEntity>(lesson);
        lessonEntity.Tutor = tutorEntity;
        
        await context.Lessons.AddAsync(lessonEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Lesson>(lessonEntity);
    }

    public async Task<Lesson?> MakeBookedAsync(Guid studentId, Guid lessonId)
    {
        var student = await context.Students.FindAsync(studentId);
        if (student is null)
            return null;

        var lesson = await context.Lessons.FindAsync(lessonId);
        if (lesson is null || lesson.Status != LessonStatus.Empty)
            return null;
        
        lesson.Student = student;
        lesson.Status = LessonStatus.Booked;

        await context.SaveChangesAsync();
        return mapper.Map<Lesson>(lesson);
    }

    public async Task<Lesson?> MakeDeletedAsync(Guid id)
    {
        var lesson = await context.Lessons.FindAsync(id);
        if (lesson is null || (lesson.Status != LessonStatus.Empty && lesson.Status != LessonStatus.Booked))
            return null;
        
        lesson.Status = LessonStatus.Deleted;

        await context.SaveChangesAsync();
        return mapper.Map<Lesson>(lesson);
    }
    
    public async Task<Lesson?> MakeEmptyAsync(Guid id)
    {
        var lesson = await context.Lessons.FindAsync(id);
        if (lesson is null || lesson.Status != LessonStatus.Booked)
            return null;
        
        lesson.Student = null;
        lesson.Status = LessonStatus.Empty;

        await context.SaveChangesAsync();
        return mapper.Map<Lesson>(lesson);
    }
}
