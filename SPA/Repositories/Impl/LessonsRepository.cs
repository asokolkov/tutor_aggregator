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
    private readonly ApplicationContext context;
    private readonly IMapper mapper;

    public LessonsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<Lesson?> GetAsync(Guid id)
    {
        var lessonEntity = await context.Lessons.FindAsync(id);
        return mapper.Map<Lesson>(lessonEntity);
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
            .Where(e => e.Tutor.Id == tutorId /* TODO && e.Start.UtcDateTime.Date == zeroTimeZoneDate*/)
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

        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            var entityEntry = await context.Lessons.AddAsync(lessonEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Lesson>(entityEntry.Entity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
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

        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Lesson>(lesson);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
    }

    public async Task<Lesson?> MakeDeletedAsync(Guid id)
    {
        var lessonEntity = await context.Lessons.FindAsync(id);
        if (lessonEntity is null)
            return null;
        
        lessonEntity.Status = LessonStatus.Deleted;

        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Lesson>(lessonEntity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
    }
}