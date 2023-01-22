namespace SPA.Data;

using Entities;
using Microsoft.EntityFrameworkCore;

internal sealed class ApplicationContext : DbContext
{
    public DbSet<TutorEntity> Tutors { get; set; }
    public DbSet<AwardEntity> Awards { get; set; }
    public DbSet<TutorContactEntity> TutorsContacts { get; set; }
    public DbSet<StudentContactEntity> StudentsContacts { get; set; }
    public DbSet<EducationEntity> Educations { get; set; }
    public DbSet<LessonEntity> Lessons { get; set; }
    public DbSet<SubjectEntity> Subjects { get; set; }
    public DbSet<StudentEntity> Students { get; set; }
    public DbSet<ReviewEntity> Reviews { get; set; }
    public DbSet<LocationEntity> Locations { get; set; }
    public DbSet<JobEntity> Jobs { get; set; }

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
        modelBuilder.Entity<TutorEntity>().Navigation(e => e.Job).AutoInclude();
        modelBuilder.Entity<TutorEntity>().Navigation(e => e.Location).AutoInclude();
        
        modelBuilder.Entity<StudentEntity>().Navigation(e => e.Contacts).AutoInclude();
        modelBuilder.Entity<StudentEntity>().Navigation(e => e.Lessons).AutoInclude();
        modelBuilder.Entity<StudentEntity>().Navigation(e => e.Reviews).AutoInclude();

        modelBuilder.UseSerialColumns();
    }
}