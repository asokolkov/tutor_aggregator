using SPA.Models;

namespace SPA.Data;

using Microsoft.EntityFrameworkCore;

internal sealed class ApplicationContext : DbContext
{
    public DbSet<Tutor> Tutors { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseSerialColumns();
    }
}