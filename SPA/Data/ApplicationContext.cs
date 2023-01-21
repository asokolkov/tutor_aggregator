namespace SPA.Data;

using Entities;
using Microsoft.EntityFrameworkCore;

internal sealed class ApplicationContext : DbContext
{
    public DbSet<TutorEntity> Tutors { get; set; } = null!;
    public DbSet<LessonEntity> Lessons { get; set; } = null!;
    public DbSet<StudentEntity> Students { get; set; } = null!;
    public DbSet<ReviewEntity> Reviews { get; set; } = null!;
    public DbSet<LocationEntity> Locations { get; set; } = null!;
    public DbSet<SubjectEntity> Subjects { get; set; } = null!;

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TutorEntity>().Navigation(e => e.Subjects).AutoInclude();
        modelBuilder.Entity<TutorEntity>().Navigation(e => e.Contacts).AutoInclude();
        modelBuilder.Entity<TutorEntity>().Navigation(e => e.Educations).AutoInclude();
        modelBuilder.Entity<TutorEntity>().Navigation(e => e.Awards).AutoInclude();
        modelBuilder.Entity<TutorEntity>().Navigation(e => e.Lessons).AutoInclude();
        modelBuilder.Entity<TutorEntity>().Navigation(e => e.Reviews).AutoInclude();

        modelBuilder.Entity<StudentEntity>().Navigation(e => e.Contacts).AutoInclude();
        modelBuilder.Entity<StudentEntity>().Navigation(e => e.Lessons).AutoInclude();
        modelBuilder.Entity<StudentEntity>().Navigation(e => e.Reviews).AutoInclude();

        modelBuilder.Entity<ReviewEntity>().Navigation(e => e.Student).AutoInclude();

        modelBuilder.UseSerialColumns();
    }
}