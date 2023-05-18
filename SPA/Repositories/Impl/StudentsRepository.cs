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
        
        return new Page<Student>(students, table.Count());
    }

    public async Task<Student?> GetAsync(Guid id)
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
            
            if (student.Education != null)
            {
                var educationEntity = mapper.Map<StudentEducationEntity>(student.Education);
                var education = await context.StudentEducations.FindAsync(educationEntity.Id);
                if (education is null)
                    context.StudentEducations.Add(educationEntity);
                else
                    educationEntity = education;
                studentEntity.Education = educationEntity;
            }
            
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
        var studentEntity = mapper.Map<StudentEntity>(student);
        await table.AddAsync(studentEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Student>(studentEntity);
    }
}