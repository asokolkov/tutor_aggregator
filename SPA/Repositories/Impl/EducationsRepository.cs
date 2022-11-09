using Microsoft.EntityFrameworkCore;
using SPA.Data;
namespace SPA.Repositories.Impl;

using Models;

internal class EducationsRepository : ICrudRepository<Education>
{
    private readonly ApplicationContext context;
    
    public EducationsRepository(ApplicationContext context)
    {
        this.context = context;
    }
    
    public async Task<Page<Education>> Get()
    {
        var educations = await context.Educations.ToListAsync();
        return new Page<Education>(educations, educations.Count);
    }
    
    public async Task<Page<Education>> Get(long page, long size)
    {
        const int pageSize = 100; // ?

        var educations = await context.Educations
            .Skip((int)page * pageSize)
            .Take((int)size)
            .ToListAsync();
        return new Page<Education>(educations, educations.Count);
    }

    public async Task<Education> Get(int id)
    {
        return await context.Educations.FindAsync(id);
    }

    public async void Update(Education education)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            context.Educations.Update(education);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeUpdate");
        }
    }

    public async void Insert(Education education)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            await context.Educations.AddAsync(education);
            await context.SaveChangesAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
        }
    }
}