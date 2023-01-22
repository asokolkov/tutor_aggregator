namespace SPA.Repositories.Impl;

using AutoMapper;
using Data;
using Domain;
using Entities;
using Microsoft.EntityFrameworkCore;

#nullable enable

internal sealed class StudentsRepository : IStudentsRepository
{
    private readonly ApplicationContext context;
    private readonly DbSet<StudentEntity> table;
    private readonly IMapper mapper;

    public StudentsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
        table = context.Students;
    }

    public async Task<Page<Student>> Get(int page, int size)
    {
        var studentEntities = await table
            .OrderBy(e => e.Id)
            .Skip(page * size)
            .Take(size)
            .ToListAsync();
        var students = mapper.Map<List<Student>>(studentEntities);
        return new Page<Student>(students);
    }

    public async Task<Student?> Get(Guid id)
    {
        return mapper.Map<Student>(await table.FindAsync(id));
    }

    public async Task<Student?> Update(Student student)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            var studentEntity = mapper.Map<StudentEntity>(student);
            var entityEntry = table.Update(studentEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Student>(entityEntry.Entity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeUpdate");
            return default;
        }
    }

    public async Task<Student?> Insert(Student student)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            var studentEntity = mapper.Map<StudentEntity>(student);
            var entityEntry = await table.AddAsync(studentEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Student>(entityEntry.Entity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
    }
}