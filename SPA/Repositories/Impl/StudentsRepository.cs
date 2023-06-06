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
    private readonly IMapper mapper;

    public StudentsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }
    
    public async Task<Student?> GetAsync(Guid id)
    {
        return mapper.Map<Student>(await context.Students.FindAsync(id));
    }

    public async Task<Page<Student>> GetPageAsync(int page, int size)
    {
        var filteredEntities = await context.Students
            .OrderBy(e => e.Id)
            .ToListAsync();
        
        var entities = mapper.Map<List<Student>>(filteredEntities.Skip(page * size).Take(size));
        
        return new Page<Student>(entities, filteredEntities.Count, page, size);
    }
    
    public async Task<Student?> InsertAsync(Student student)
    {
        var entity = mapper.Map<StudentEntity>(student);
        var entry = await context.Students.AddAsync(entity);
        await context.SaveChangesAsync();
        return mapper.Map<Student>(entry.Entity);
    }

    public async Task<Student?> UpdateAsync(Guid id, UpdateStudent updateStudent)
    {
        var entity = await context.Students.FindAsync(id);
        if (entity is null)
            return null;
            
        var modelEntity = mapper.Map<StudentEntity>(updateStudent);

        entity.FirstName = modelEntity.FirstName;
        entity.LastName = modelEntity.LastName;
        entity.Age = modelEntity.Age;
        entity.Description = modelEntity.Description;

        if (entity.Education is not null)
            context.StudentEducations.Remove(entity.Education);
        entity.Education = modelEntity.Education is not null ? (await context.StudentEducations.AddAsync(modelEntity.Education)).Entity : null;
            
        context.StudentsContacts.RemoveRange(entity.Contacts);
        var contactsEntities = new List<StudentContactEntity>();
        foreach (var contact in modelEntity.Contacts)
            contactsEntities.Add((await context.StudentsContacts.AddAsync(contact)).Entity);
        entity.Contacts = contactsEntities;
            
        try
        {
            await context.SaveChangesAsync();
        }
        catch (Exception exception)
        {
            return null;
        }
        
        return mapper.Map<Student>(entity);
    }
}