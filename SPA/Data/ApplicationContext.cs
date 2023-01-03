using SPA.Models;

namespace SPA.Data;

using Microsoft.EntityFrameworkCore;

public sealed class ApplicationContext : DbContext
{
    public DbSet<Tutor> Tutors { get; set; }
    public DbSet<Award> Awards { get; set; }
    public DbSet<TutorContact> TutorsContacts { get; set; }
    public DbSet<StudentContact> StudentsContacts { get; set; }
    public DbSet<Education> Educations { get; set; }
    public DbSet<Lesson> Lessons { get; set; }
    public DbSet<Student> Students { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<Location> Locations { get; set; }
    public DbSet<Job> Jobs { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Tutor>().Navigation(e => e.Subjects).AutoInclude();
        modelBuilder.Entity<Tutor>().Navigation(e => e.Contacts).AutoInclude();
        modelBuilder.Entity<Tutor>().Navigation(e => e.Educations).AutoInclude();
        modelBuilder.Entity<Tutor>().Navigation(e => e.Awards).AutoInclude();
        modelBuilder.Entity<Tutor>().Navigation(e => e.Lessons).AutoInclude();
        modelBuilder.Entity<Tutor>().Navigation(e => e.Reviews).AutoInclude();
        
        modelBuilder.Entity<Student>().Navigation(e => e.Contacts).AutoInclude();
        modelBuilder.Entity<Student>().Navigation(e => e.Lessons).AutoInclude();
        modelBuilder.Entity<Student>().Navigation(e => e.Reviews).AutoInclude();
        
        modelBuilder.UseSerialColumns();
    }
}