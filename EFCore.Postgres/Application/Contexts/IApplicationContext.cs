using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Postgres.Application.Contexts;

public interface IApplicationContext
{
    public DbSet<TutorEntity> Tutors { get; set; }
    public DbSet<LessonEntity> Lessons { get; set; }
    public DbSet<StudentEntity> Students { get; set; }
    public DbSet<ReviewEntity> Reviews { get; set; }
    public DbSet<LocationEntity> Locations { get; set; }
    public DbSet<SubjectEntity> Subjects { get; set; }
    public DbSet<AvatarEntity> Avatars { get; set; }
    public DbSet<TutorContactEntity> TutorsContacts { get; set; }
    public DbSet<StudentContactEntity> StudentsContacts { get; set; }
    public DbSet<RequirementEntity> Requirements { get; set; }
    public DbSet<AwardEntity> Awards { get; set; }
    public DbSet<TutorEducationEntity> TutorEducations { get; set; }
    public DbSet<StudentEducationEntity> StudentEducations { get; set; }
    
    Task<int> SaveChangesAsync();
}