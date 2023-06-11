#nullable enable

using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using SPA.Domain;
using LessonStatus = EFCore.Postgres.Application.Models.Entities.LessonStatus;

namespace SPA.Repositories.Impl;

public sealed class LessonsRepository : ILessonsRepository
{
    private readonly ApplicationContext context;
    private readonly IMapper mapper;

    public LessonsRepository(ApplicationContext context, IMapper mapper)
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

    public async Task<ICollection<Lesson>> GetTutorLessonsAsync(Guid tutorId, DateTimeOffset dateTime)
    {
        var startDate = dateTime.ToOffset(TimeSpan.Zero);
        var endDate = startDate.Add(new TimeSpan(24, 0, 0));

        var entities = await context.Lessons
            .Where(e => 
                e.Tutor.Id == tutorId && 
                DateTimeOffset.Compare(startDate, e.Start) < 0 &&
                DateTimeOffset.Compare(endDate, e.End) > 0 &&
                e.Status != LessonStatus.Deleted)
            .ToListAsync();
        var models = mapper.Map<ICollection<Lesson>>(entities);

        return models;
    }

    public async Task<ICollection<Lesson>> GetTutorLessonsAsync(Guid tutorId, DateTimeOffset start, DateTimeOffset end)
    {
        var entities = await context.Lessons
            .Where(e => 
                e.Tutor.Id == tutorId && 
                DateTimeOffset.Compare(start, e.Start) < 0 &&
                DateTimeOffset.Compare(end, e.End) > 0 &&
                e.Status != LessonStatus.Deleted)
            .ToListAsync();
        var models = mapper.Map<ICollection<Lesson>>(entities);

        return models;
    }

    public async Task<ICollection<Lesson>> GetTutorLessonsAsync(Guid tutorId)
    {
        var entities = await context.Lessons
            .Where(e => 
                e.Tutor.Id == tutorId && 
                e.Status != LessonStatus.Empty &&
                e.Status != LessonStatus.ExpiredEmpty)
            .ToListAsync();
        var models = mapper.Map<ICollection<Lesson>>(entities);

        return models;
    }

    public async Task<Lesson?> InsertAsync(Guid tutorId, Lesson lesson)
    {
        var tutorEntity = await context.Tutors.FindAsync(tutorId);
        if (tutorEntity is null)
            return null;

        var lessonEntity = mapper.Map<LessonEntity>(lesson);
        lessonEntity.Tutor = tutorEntity;
        
        var entry = await context.Lessons.AddAsync(lessonEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Lesson>(entry.Entity);
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
        //note: не нашел где используется и как это удаление, тут проблема можнет быть в том, что этот фильтр теперь нужно накладывать на все записи
        //note: есть идея перекладывать в служебную табоичку
        lesson.Status = LessonStatus.Deleted;

        await context.SaveChangesAsync();
        return mapper.Map<Lesson>(lesson);
    }
    
    public async Task<Lesson?> MakeEmptyAsync(Guid id)
    {
        var lesson = await context.Lessons.FindAsync(id);
        //note: кажется проверка статуса здесь это доменная логика, а не репозиторная
        if (lesson is null || lesson.Status != LessonStatus.Booked)
            return null;
        
        lesson.Student = null;
        lesson.Status = LessonStatus.Empty;

        await context.SaveChangesAsync();
        return mapper.Map<Lesson>(lesson);
    }
}
