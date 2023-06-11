using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using SPA.Domain;
using SPA.Repositories.Impl;
using LessonStatus = EFCore.Postgres.Application.Models.Entities.LessonStatus;

namespace Tests.SPA.RepositoriesTests;

internal sealed class LessonsRepositoryTests
{
    private ApplicationContext context = null!;
    private LessonsRepository repository = null!;
    
    [SetUp]
    public void SetUp()
    {
        var mapperConfig = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<TutorEntity, Tutor>().ReverseMap();
            cfg.CreateMap<LessonEntity, Lesson>().ReverseMap();
            cfg.CreateMap<LocationEntity, Location>().ReverseMap();
            cfg.CreateMap<ReviewEntity, Review>().ReverseMap();
            cfg.CreateMap<StudentEntity, Student>().ReverseMap();
            cfg.CreateMap<SubjectEntity, Subject>().ReverseMap();
            cfg.CreateMap<TutorContactEntity, TutorContact>().ReverseMap();
            cfg.CreateMap<StudentContactEntity, StudentContact>().ReverseMap();
            cfg.CreateMap<UpdateTutor, TutorEntity>().ReverseMap();
            cfg.CreateMap<UpdateStudent, StudentEntity>();
            cfg.CreateMap<TutorEducationEntity, TutorEducation>().ReverseMap();
            cfg.CreateMap<StudentEducationEntity, StudentEducation>().ReverseMap();
            cfg.CreateMap<AwardEntity, Award>().ReverseMap();
            cfg.CreateMap<RequirementEntity, Requirement>().ReverseMap();
            cfg.CreateMap<AvatarEntity, Avatar>().ReverseMap();
        });
        var mapper = new Mapper(mapperConfig);
        var dbContextOptions = new DbContextOptionsBuilder<ApplicationContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString());
        
        context = new ApplicationContext(dbContextOptions.Options);
        context.Database.EnsureCreated();
        repository = new LessonsRepository(context, mapper);
    }

    [TearDown]
    public void TearDown()
    {
        context.Database.EnsureDeleted();
    }
    
    [Test]
    public async Task GetAsync_ValidId_ReturnsLesson()
    {
        var entity = new LessonEntity
        {
            Id = Guid.NewGuid(),
            Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
            Student = null
        };
        await context.Lessons.AddAsync(entity);
        await context.SaveChangesAsync();

        var result = (await repository.GetAsync(entity.Id))!;
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Lesson>());
            Assert.That(result.Id, Is.EqualTo(entity.Id));
        });
    }
    
    [Test]
    public async Task GetAsync_InvalidId_ReturnsNull()
    {
        var entity = new LessonEntity
        {
            Id = Guid.NewGuid(),
            Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
            Student = null
        };
        await context.Lessons.AddAsync(entity);
        await context.SaveChangesAsync();

        var result = await repository.GetAsync(Guid.NewGuid());
        
        Assert.That(result, Is.Null);
    }
    
    [Test]
    public async Task GetStudentLessonsAsync_ValidStudentId_ReturnsLessonsCollection()
    {
        var entities = new List<LessonEntity>
        {
            new()
            {
                Id = Guid.NewGuid(),
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = null
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            }
        };
        await context.Lessons.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetStudentLessonsAsync(entities[1].Student!.Id);
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<ICollection<Lesson>>());
            Assert.That(result, Has.Count.EqualTo(1));
            Assert.That(result.ToList()[0].Id, Is.EqualTo(entities[1].Id));
        });
    }
    
    [Test]
    public async Task GetStudentLessonsAsync_InvalidStudentId_ReturnsEmptyLessonsCollection()
    {
        var entities = new List<LessonEntity>
        {
            new()
            {
                Id = Guid.NewGuid(),
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = null
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            }
        };
        await context.Lessons.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetStudentLessonsAsync(Guid.NewGuid());
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<ICollection<Lesson>>());
            Assert.That(result, Has.Count.EqualTo(0));
        });
    }
    
    [Test]
    public async Task GetTutorLessonsAsync_ValidTutorId_ReturnsLessonsCollection()
    {
        var tutorEntity = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" };
        var entities = new List<LessonEntity>
        {
            new()
            {
                Id = Guid.NewGuid(),
                Status = LessonStatus.Empty,
                Tutor = tutorEntity,
                Student = null
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.ExpiredEmpty,
                Tutor = tutorEntity,
                Student = null
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.Booked,
                Tutor = tutorEntity,
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.ExpiredBooked,
                Tutor = tutorEntity,
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.Finished,
                Tutor = tutorEntity,
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.Deleted,
                Tutor = tutorEntity,
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            }
        };
        await context.Lessons.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = (await repository.GetTutorLessonsAsync(tutorEntity.Id)).ToList();
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<ICollection<Lesson>>());
            Assert.That(result, Has.Count.EqualTo(4));
            Assert.That(result.Any(x => x.Status == global::SPA.Domain.LessonStatus.Booked), Is.True);
            Assert.That(result.Any(x => x.Status == global::SPA.Domain.LessonStatus.Deleted), Is.True);
            Assert.That(result.Any(x => x.Status == global::SPA.Domain.LessonStatus.ExpiredBooked), Is.True);
            Assert.That(result.Any(x => x.Status == global::SPA.Domain.LessonStatus.Finished), Is.True);
            Assert.That(result.Any(x => x.Status == global::SPA.Domain.LessonStatus.ExpiredEmpty), Is.False);
            Assert.That(result.Any(x => x.Status == global::SPA.Domain.LessonStatus.Empty), Is.False);
        });
    }
    
    [Test]
    public async Task GetTutorLessonsAsync_InvalidTutorId_ReturnsEmptyLessonsCollection()
    {
        var entities = new List<LessonEntity>
        {
            new()
            {
                Id = Guid.NewGuid(),
                Status = LessonStatus.Empty,
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = null
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.ExpiredEmpty,
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = null
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.Booked,
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.ExpiredBooked,
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.Finished,
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            },
            new()
            {
                Id = Guid.NewGuid(), 
                Status = LessonStatus.Deleted,
                Tutor = new TutorEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
                Student = new StudentEntity { Id = Guid.NewGuid(), FirstName = "", LastName = "" }
            }
        };
        await context.Lessons.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetTutorLessonsAsync(Guid.NewGuid());
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<ICollection<Lesson>>());
            Assert.That(result, Has.Count.EqualTo(0));
        });
    }
}