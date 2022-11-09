using Microsoft.EntityFrameworkCore;
using SPA.Data;
namespace SPA.Repositories.Impl;

using Models;

internal class AwardsRepository : ICrudRepository<Award>
{
    private readonly ApplicationContext context;
    
    public AwardsRepository(ApplicationContext context)
    {
        this.context = context;
    }
    
    public async Task<Page<Award>> Get()
    {
        var awards = await context.Awards.ToListAsync();
        return new Page<Award>(awards, awards.Count);
    }
    
    public async Task<Page<Award>> Get(long page, long size)
    {
        const int pageSize = 100; // ?

        var awards = await context.Awards
            .Skip((int)page * pageSize)
            .Take((int)size)
            .ToListAsync();
        return new Page<Award>(awards, awards.Count);
    }

    public async Task<Award> Get(int id)
    {
        return await context.Awards.FindAsync(id);
    }

    public async void Update(Award award)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            context.Awards.Update(award);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeUpdate");
        }
    }

    public async void Insert(Award award)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            await context.Awards.AddAsync(award);
            await context.SaveChangesAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
        }
    }
}