using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SPA.Domain;


#nullable enable

namespace SPA.Repositories.Impl;

using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;


internal sealed class LessonRepository : ILessonRepository
{
    private readonly ApplicationContext context;
    private readonly IMapper mapper;

    public LessonRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<Lesson> GetAsync(Guid id)
    {
        var lessonEntity = await context.Lessons.FindAsync(id);
        return mapper.Map<Lesson>(lessonEntity);
    }

    public async Task<ICollection<Lesson>> GetTutorLessonsAsync(Guid tutorId)
    {
        var entities = (ICollection<LessonEntity>) await context.Lessons
            .Include(e => e.Student)
            .Include(e => e.Tutor)
            .Where(l => l.Tutor.Id == tutorId)
            .ToListAsync();
        return mapper.Map<ICollection<Lesson>>(entities);
    }

    public async Task<ICollection<Lesson>> GetStudentLessonsAsync(Guid studentId)
    {
        var entities = (ICollection<LessonEntity>) await context.Lessons
            .Include(e => e.Student)
            .Include(e => e.Tutor)
            .Where(l => l.Student != null && l.Student.Id == studentId)
            .ToListAsync();
        return mapper.Map<ICollection<Lesson>>(entities);
    }

    public async Task<Lesson?> InsertAsync(Guid tutorId, Lesson lesson)
    {
        var tutor = await context.Tutors.FindAsync(tutorId);
        if (tutor is null)
            return null;

        var lessonEntity = new LessonEntity
        {
            Id = lesson.Id,
            Tutor = tutor,
            Price = lesson.Price,
            Status = mapper.Map<LessonStatus>(lesson.Status),
            Type = mapper.Map<LessonType>(lesson.Type),
            Start = lesson.Start,
            End = lesson.End
        };

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

    public async Task DeleteAsync(Guid id)
    {
        var lesson = await context.Lessons.FindAsync(id);
        if (lesson is null)
            return;

        context.Lessons.Remove(lesson);
        await context.SaveChangesAsync();
    }

    public async Task<Lesson?> BookAsync(Guid studentId, Guid lessonId)
    {
        var student = await context.Students.FindAsync(studentId);
        if (student is null)
            return null;

        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            var lessonEntity = await context.Lessons
                .Include(e => e.Student)
                .Include(e => e.Tutor)
                .Where(e => e.Id == lessonId && e.Student == null)
                .FirstOrDefaultAsync();
            
            if (lessonEntity is null)
                return null;
            lessonEntity.Student = student; 
            var entityEntry = context.Lessons.Update(lessonEntity);
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

    public async Task<Lesson?> CancelAsync(Guid lessonId)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            var lessonEntity = await context.Lessons
                .Where(e => e.Id == lessonId && e.Student != null)
                .FirstOrDefaultAsync();
            
            if (lessonEntity is null)
                return null;
            
            lessonEntity.Status = LessonStatus.Canceled; 
            var entityEntry = context.Lessons.Update(lessonEntity);
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
}