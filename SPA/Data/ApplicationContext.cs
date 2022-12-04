using SPA.Models;

namespace SPA.Data;

using Microsoft.EntityFrameworkCore;

public sealed class ApplicationContext : DbContext
{
    public DbSet<Tutor> Tutors { get; set; }
    public DbSet<Award> Awards { get; set; }
    public DbSet<Contact> Contacts { get; set; }
    public DbSet<Education> Educations { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseSerialColumns();
    }
}