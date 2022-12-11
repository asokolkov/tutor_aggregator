using Microsoft.EntityFrameworkCore;
using SPA.Data;
using SPA.Models;

namespace SPA.Repositories.Impl;

public class PostgresRepository<T> : ICrudRepository<T> where T : class
{
    private readonly ApplicationContext context;
    private readonly DbSet<T> table;

    public PostgresRepository(ApplicationContext context)
    {
        this.context = context;
        table = context.Set<T>();
    }

    public async Task<Page<T>> Get()
    {
        var elements = await table.ToListAsync();
        return new Page<T>(elements, elements.Count);
    }
    
    public async Task<Page<T>> Get(long page, long size)
    {
        const int pageSize = 100; // ?

        var elements = await table
            .Skip((int)page * pageSize)
            .Take((int)size)
            .ToListAsync();
        return new Page<T>(elements, elements.Count);
    }

    public async Task<T> Get(int id)
    {
        return await table.FindAsync(id);
    }

    public async Task<T> Update(T element)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            table.Update(element);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return element;
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeUpdate");
            return default;
        }
    }

    public async Task<T> Insert(T element)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            await table.AddAsync(element);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return element;
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
    }
}