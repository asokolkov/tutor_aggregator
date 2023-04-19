namespace Tools.DataGenerator.Services;

using Microsoft.EntityFrameworkCore;
using Npgsql;

internal sealed class DatabaseCleaner<TContext> : IDatabaseCleaner
    where TContext : DbContext
{
    private readonly TContext context;


    public DatabaseCleaner(TContext context)
    {
        this.context = context;
    }

    public async Task CleanupDatabase()
    {
        var tableNames = context.Model.GetEntityTypes()
            .Select(t => t.GetTableName())
            .Where(name => name != null)
            .Distinct();

        var queue = new Queue<string>();
        foreach (var name in tableNames)
            queue.Enqueue(name!);

        foreach (var tableName in tableNames)
        {
            try
            {
                await context.Database.ExecuteSqlRawAsync($"TRUNCATE TABLE \"{tableName}\" CASCADE");
            }
            catch (PostgresException e)
            {
            }
        }
    }
}