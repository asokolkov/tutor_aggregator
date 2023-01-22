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
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TutorEntity>()
            .HasMany(e => e.Subjects)
            .WithMany(e => e.Tutors);
        modelBuilder.Entity<TutorEntity>()
            .HasOne(e => e.Location)
            .WithMany(e => e.Tutors);
        modelBuilder.Entity<TutorEntity>()
            .HasMany(e => e.Reviews)
            .WithOne(e => e.Tutor);
        modelBuilder.Entity<TutorEntity>()
            .Navigation(e => e.Lessons)
            .AutoInclude();
        
        modelBuilder.Entity<StudentEntity>()
            .Navigation(e => e.Lessons)
            .AutoInclude();
        modelBuilder.Entity<StudentEntity>()
            .HasMany(e => e.Reviews)
            .WithOne(e => e.Student);

        modelBuilder.Entity<ReviewEntity>()
            .Navigation(e => e.Student)
            .AutoInclude();
        modelBuilder.Entity<ReviewEntity>()
            .Navigation(e => e.Tutor)
            .AutoInclude();

        modelBuilder.UseSerialColumns();
    }
}