using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using SPA.Domain;
using SPA.Repositories.Impl;
using LessonType = EFCore.Postgres.Application.Models.Entities.LessonType;

namespace Tests.SPA.RepositoriesTests;

internal sealed class TutorsRepositoryTests
{
    private ApplicationContext context = null!;
    private TutorsRepository repository = null!;
    
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
        repository = new TutorsRepository(context, mapper);
    }

    [TearDown]
    public void TearDown()
    {
        context.Database.EnsureDeleted();
    }
    
    [Test]
    public async Task GetPageAsync_AllNullParameters_ReturnsTutorsPage()
    {
        var subject = new SubjectEntity { Id = Guid.NewGuid(), Description = "" };
        var entities = new List<TutorEntity>
        {
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = new List<SubjectEntity> { subject } }
        };
        await context.Tutors.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetPageAsync(0, 10, null, null, null, null, null, null);
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Page<Tutor>>());
            Assert.That(result.Items.ToList()[0].Id, Is.EqualTo(entities[1].Id));
            Assert.That(result.Items, Has.Count.EqualTo(1));
            Assert.That(result.TotalCount, Is.EqualTo(1));
        });
    }
    
    [Test]
    public async Task GetPageAsync_EmptySubjects_ReturnsTutorsPage()
    {
        var subjects = new List<SubjectEntity>
        {
            new() { Id = Guid.NewGuid(), Description = "A" },
            new() { Id = Guid.NewGuid(), Description = "B" }
        };
        var entities = new List<TutorEntity>
        {
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "" },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = subjects },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = new List<SubjectEntity> { subjects[0] } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = new List<SubjectEntity> { subjects[1] } }
        };
        await context.Tutors.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetPageAsync(0, 10, "A", null, null, null, null, null);
        var items = result.Items.ToList();
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Page<Tutor>>());
            Assert.That(items.Any(x => x.Id == entities[1].Id), Is.True);
            Assert.That(items.Any(x => x.Id == entities[2].Id), Is.True);
            Assert.That(items, Has.Count.EqualTo(2));
            Assert.That(result.TotalCount, Is.EqualTo(2));
        });
    }
    
    [Test]
    public async Task GetPageAsync_City_ReturnsTutorsPage()
    {
        var subject = new SubjectEntity { Id = Guid.NewGuid(), Description = "" };
        var locations = new List<LocationEntity>
        {
            new() { Id = Guid.NewGuid(), City = "A", District = "A" },
            new() { Id = Guid.NewGuid(), City = "B", District = "B" }
        };
        var entities = new List<TutorEntity>
        {
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Location = locations[0], Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Location = locations[0], Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Location = locations[1], Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = new List<SubjectEntity> { subject } }
        };
        await context.Tutors.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetPageAsync(0, 10, null, "A", null, null, null, null);
        var items = result.Items.ToList();
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Page<Tutor>>());
            Assert.That(items.Any(x => x.Id == entities[0].Id), Is.True);
            Assert.That(items.Any(x => x.Id == entities[1].Id), Is.True);
            Assert.That(items.Any(x => x.Id == entities[3].Id), Is.True);
            Assert.That(items, Has.Count.EqualTo(3));
            Assert.That(result.TotalCount, Is.EqualTo(3));
        });
    }

    [Test]
    public async Task GetPageAsync_District_ReturnsTutorsPage()
    {
        var subject = new SubjectEntity { Id = Guid.NewGuid(), Description = "" };
        var locations = new List<LocationEntity>
        {
            new() { Id = Guid.NewGuid(), City = "A", District = "A" },
            new() { Id = Guid.NewGuid(), City = "B", District = "B" }
        };
        var entities = new List<TutorEntity>
        {
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Location = locations[1], Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Location = locations[0], Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Location = locations[0], Subjects = new List<SubjectEntity> { subject } }
        };
        await context.Tutors.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetPageAsync(0, 10, null, null, "A", null, null, null);
        var items = result.Items.ToList();
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Page<Tutor>>());
            Assert.That(items.Any(x => x.Id == entities[1].Id), Is.True);
            Assert.That(items.Any(x => x.Id == entities[2].Id), Is.True);
            Assert.That(items.Any(x => x.Id == entities[3].Id), Is.True);
            Assert.That(items, Has.Count.EqualTo(3));
            Assert.That(result.TotalCount, Is.EqualTo(3));
        });
    }
    
    [Test]
    public async Task GetPageAsync_Rating_ReturnsTutorsPage()
    {
        var subject = new SubjectEntity { Id = Guid.NewGuid(), Description = "" };
        var entities = new List<TutorEntity>
        {
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Rating = 1, Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Rating = 2, Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Rating = 3, Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = new List<SubjectEntity> { subject } }
        };
        await context.Tutors.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetPageAsync(0, 10, null, null, null, null, 2, null);
        var items = result.Items.ToList();
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Page<Tutor>>());
            Assert.That(items.Any(x => x.Id == entities[1].Id), Is.True);
            Assert.That(items.Any(x => x.Id == entities[2].Id), Is.True);
            Assert.That(items, Has.Count.EqualTo(2));
            Assert.That(result.TotalCount, Is.EqualTo(2));
        });
    }
    
    [Test]
    public async Task GetPageAsync_LessonsPrice_ReturnsTutorsPage()
    {
        var subject = new SubjectEntity { Id = Guid.NewGuid(), Description = "" };
        var lessons = new List<LessonEntity>
        {
            new() { Id = Guid.NewGuid(), Price = 100 },
            new() { Id = Guid.NewGuid(), Price = 100 },
            new() { Id = Guid.NewGuid(), Price = 200 },
            new() { Id = Guid.NewGuid(), Price = 300 },
            new() { Id = Guid.NewGuid(), Price = 400 }
        };
        var entities = new List<TutorEntity>
        {
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Lessons = new List<LessonEntity> { lessons[0], lessons[2] }, Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Lessons = new List<LessonEntity> { lessons[3] }, Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Lessons = new List<LessonEntity> { lessons[4], lessons[1] }, Subjects = new List<SubjectEntity> { subject } }
        };
        await context.Tutors.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetPageAsync(0, 10, null, null, null, 200, null, null);
        var items = result.Items.ToList();
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Page<Tutor>>());
            Assert.That(items.Any(x => x.Id == entities[1].Id), Is.True);
            Assert.That(items.Any(x => x.Id == entities[3].Id), Is.True);
            Assert.That(items, Has.Count.EqualTo(2));
            Assert.That(result.TotalCount, Is.EqualTo(2));
        });
    }
    
    [Test]
    public async Task GetPageAsync_LessonsType_ReturnsTutorsPage()
    {
        var subject = new SubjectEntity { Id = Guid.NewGuid(), Description = "" };
        var lessons = new List<LessonEntity>
        {
            new() { Id = Guid.NewGuid(), Type = LessonType.Online },
            new() { Id = Guid.NewGuid(), Type = LessonType.Online },
            new() { Id = Guid.NewGuid(), Type = LessonType.Offline },
            new() { Id = Guid.NewGuid(), Type = LessonType.Offline }
        };
        var entities = new List<TutorEntity>
        {
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Lessons = new List<LessonEntity> { lessons[0], lessons[2] }, Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Lessons = new List<LessonEntity> { lessons[1] }, Subjects = new List<SubjectEntity> { subject } },
            new() { Id = Guid.NewGuid(), FirstName = "", LastName = "", Lessons = new List<LessonEntity> { lessons[3] }, Subjects = new List<SubjectEntity> { subject } }
        };
        await context.Tutors.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetPageAsync(0, 10, null, null, null, null, null, global::SPA.Domain.LessonType.Online);
        var items = result.Items.ToList();
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Page<Tutor>>());
            Assert.That(items.Any(x => x.Id == entities[1].Id), Is.True);
            Assert.That(items.Any(x => x.Id == entities[2].Id), Is.True);
            Assert.That(items, Has.Count.EqualTo(2));
            Assert.That(result.TotalCount, Is.EqualTo(2));
        });
    }
}