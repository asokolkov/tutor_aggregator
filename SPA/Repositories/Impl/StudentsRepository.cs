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

    public async Task<Student?> Update(Guid id, UpdateStudent student)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            var studentEntity = await table.FindAsync(id);
            if (studentEntity is null)
                return default;

            studentEntity.FirstName = student.FirstName;
            studentEntity.LastName = student.LastName;
            studentEntity.Age = student.Age;
            studentEntity.Description = student.Description;
            studentEntity.EducationPlace = student.EducationPlace;
            studentEntity.Grade = student.Grade;
            
            var contactsEntities = mapper.Map<ICollection<StudentContactEntity>>(student.Contacts).ToList();
            foreach (var contactEntity in contactsEntities)
            {
                var contact = await context.StudentsContacts.FindAsync(contactEntity.Id);
                if (contact is null)
                    context.StudentsContacts.Add(contactEntity);
            }
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