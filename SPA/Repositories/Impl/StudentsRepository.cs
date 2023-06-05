namespace SPA.Repositories.Impl;

using AutoMapper;
using Domain;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
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

    public async Task<Page<Student>> GetAsync(int page, int size)
    {
        var studentEntities = await table
            .OrderBy(e => e.Id)
            .Skip(page * size)
            .Take(size)
            .ToListAsync();
        var students = mapper.Map<List<Student>>(studentEntities);
        
        return new Page<Student>(students, table.Count(), page, size);
    }

    public async Task<Student?> GetAsync(Guid id)
    {
        return mapper.Map<Student>(await table.FindAsync(id));
    }

    public async Task<Student?> Update(Guid id, UpdateStudent updateStudent)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            var studentEntity = await table.FindAsync(id);
            if (studentEntity is null)
                return default;
            
            var student = mapper.Map<StudentEntity>(updateStudent);

            studentEntity.FirstName = student.FirstName;
            studentEntity.LastName = student.LastName;
            studentEntity.Age = student.Age;
            studentEntity.Description = student.Description;

            if (studentEntity.Education is not null)
                context.StudentEducations.Remove(studentEntity.Education);
            studentEntity.Education = student.Education is not null ? (await context.StudentEducations.AddAsync(student.Education)).Entity : null;
            
            context.StudentsContacts.RemoveRange(studentEntity.Contacts);
            var contactsEntities = new List<StudentContactEntity>();
            foreach (var contact in student.Contacts)
                contactsEntities.Add((await context.StudentsContacts.AddAsync(contact)).Entity);
            studentEntity.Contacts = contactsEntities;
            
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Student>(studentEntity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeUpdate");
            return default;
        }
    }

    public async Task<Student?> Insert(Student student)
    {
        var studentEntity = mapper.Map<StudentEntity>(student);
        await table.AddAsync(studentEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Student>(studentEntity);
    }
}