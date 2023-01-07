using Microsoft.EntityFrameworkCore;
using SPA.Data;
using SPA.Models;

namespace SPA.Repositories.Impl;

public class PostgresRepository<T> : ICrudRepository<T> where T : class, IEntity
{
    private readonly ApplicationContext context;
    private readonly DbSet<T> table;

    public PostgresRepository(ApplicationContext context)
    {
        this.context = context;
        table = context.Set<T>();
    }

    public async Task<Page<T>> Get(long page, long size)
    {
        const int pageSize = 100; // ?

        var elements = await table
            .OrderBy(e => e.Id)
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
    
    public async Task<Page<Review>> GetTutorReviews(int id, long page, long size)
    {
        var tutor = await context.Tutors.FindAsync(id);

        if (tutor == null)
            return null;
        
        const int pageSize = 100; // ?

        var reviews = tutor.Reviews
            .OrderBy(e => e.Id)
            .Skip((int)page * pageSize)
            .Take((int)size)
            .ToList();
        
        return new Page<Review>(reviews, reviews.Count);
    }
}