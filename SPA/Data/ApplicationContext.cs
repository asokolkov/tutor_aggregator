namespace SPA.Data;

using Microsoft.EntityFrameworkCore;

internal sealed class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
}