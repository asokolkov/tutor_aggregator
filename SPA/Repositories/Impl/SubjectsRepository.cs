using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SPA.Data;
using SPA.Domain;
using SPA.Entities;

namespace SPA.Repositories.Impl;

internal sealed class SubjectsRepository : ISubjectsRepository
{
    private readonly ApplicationContext context;
    private readonly DbSet<SubjectEntity> table;
    private readonly IMapper mapper;

        public SubjectsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
        table = context.Subjects;
    }

    public async Task<List<Subject>> GetAsync()
    {
        var entities = await table
            .OrderBy(e => e.Description)
            .ToListAsync();
        return mapper.Map<List<Subject>>(entities);
    }

    public async Task<Subject> GetAsync(Guid id)
    {
        var entity = await table.FindAsync(id);
        return mapper.Map<Subject>(entity);
    }

    public async Task<Subject> InsertAsync(Subject subject)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            var subjectEntity = mapper.Map<SubjectEntity>(subject);
            var entity = await table.AddAsync(subjectEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Subject>(entity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
        
    }
}