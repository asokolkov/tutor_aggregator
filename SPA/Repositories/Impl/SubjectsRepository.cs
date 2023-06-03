using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using SPA.Domain;

namespace SPA.Repositories.Impl;

internal sealed class SubjectsRepository : ISubjectsRepository
{
    private readonly IApplicationContext context;
    private readonly IMapper mapper;

    public SubjectsRepository(IApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<List<Subject>> GetAsync()
    {
        var entities = await context.Subjects
            .OrderBy(e => e.Description)
            .ToListAsync();
        return mapper.Map<List<Subject>>(entities);
    }

    public async Task<Subject> GetAsync(Guid id)
    {
        var entity = await context.Subjects.FindAsync(id);
        return mapper.Map<Subject>(entity);
    }

    public async Task<Subject> InsertAsync(Subject subject)
    {
        var subjectEntity = mapper.Map<SubjectEntity>(subject);
        var entry = await context.Subjects.AddAsync(subjectEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Subject>(entry.Entity);
    }
}