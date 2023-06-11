﻿namespace EFCore.Postgres.Application.Contexts;

using Microsoft.EntityFrameworkCore;
using Models.Entities;

public class ApplicationContext : DbContext
{
    public DbSet<TutorEntity> Tutors { get; set; } = null!;
    public DbSet<LessonEntity> Lessons { get; set; } = null!;
    public DbSet<StudentEntity> Students { get; set; } = null!;
    public DbSet<ReviewEntity> Reviews { get; set; } = null!;
    public DbSet<LocationEntity> Locations { get; set; } = null!;
    public DbSet<SubjectEntity> Subjects { get; set; } = null!;
    public DbSet<AvatarEntity> Avatars { get; set; } = null!;
    public DbSet<TutorContactEntity> TutorsContacts { get; set; } = null!;
    public DbSet<StudentContactEntity> StudentsContacts { get; set; } = null!;
    public DbSet<RequirementEntity> Requirements { get; set; } = null!;
    public DbSet<AwardEntity> Awards { get; set; } = null!;
    public DbSet<TutorEducationEntity> TutorEducations { get; set; } = null!;
    public DbSet<StudentEducationEntity> StudentEducations { get; set; } = null!;

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
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
            .HasMany(e => e.Lessons)
            .WithOne(e => e.Tutor);
        modelBuilder.Entity<TutorEntity>()
            .Navigation(e => e.Contacts)
            .AutoInclude();
        modelBuilder.Entity<TutorEntity>()
            .Navigation(e => e.Reviews)
            .AutoInclude();
        modelBuilder.Entity<TutorEntity>()
            .Navigation(e => e.Location)
            .AutoInclude();
        modelBuilder.Entity<TutorEntity>()
            .Navigation(e => e.Subjects)
            .AutoInclude();
        modelBuilder.Entity<TutorEntity>()
            .Navigation(e => e.Educations)
            .AutoInclude();
        modelBuilder.Entity<TutorEntity>()
            .Navigation(e => e.Awards)
            .AutoInclude();
        modelBuilder.Entity<TutorEntity>()
            .Navigation(e => e.Requirements)
            .AutoInclude();

        modelBuilder.Entity<StudentEntity>()
            .HasMany(e => e.Lessons)
            .WithOne(e => e.Student);
        modelBuilder.Entity<StudentEntity>()
            .HasMany(e => e.Reviews)
            .WithOne(e => e.Student);
        modelBuilder.Entity<StudentEntity>()
            .Navigation(e => e.Contacts)
            .AutoInclude();
        modelBuilder.Entity<StudentEntity>()
            .Navigation(e => e.Education)
            .AutoInclude();

        modelBuilder.Entity<ReviewEntity>()
            .Navigation(e => e.Student)
            .AutoInclude();
        modelBuilder.Entity<ReviewEntity>()
            .Navigation(e => e.Tutor)
            .AutoInclude();
        
        modelBuilder.Entity<LessonEntity>()
            .Navigation(e => e.Student)
            .AutoInclude();
        modelBuilder.Entity<LessonEntity>()
            .Navigation(e => e.Tutor)
            .AutoInclude();

        modelBuilder.UseSerialColumns();
    }
}