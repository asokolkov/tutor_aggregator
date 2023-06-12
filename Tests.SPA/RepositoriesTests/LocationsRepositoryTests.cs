using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using SPA.Domain;
using SPA.Repositories.Impl;
using LessonStatus = EFCore.Postgres.Application.Models.Entities.LessonStatus;

namespace Tests.SPA.RepositoriesTests;

internal sealed class LocationsRepositoryTests
{
    private ApplicationContext context = null!;
    private LocationsRepository repository = null!;
    
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
        repository = new LocationsRepository(context, mapper);
    }

    [TearDown]
    public void TearDown()
    {
        context.Database.EnsureDeleted();
    }
    
    [Test]
    public async Task GetAsync_ValidId_ReturnsLocation()
    {
        var entity = new LocationEntity { Id = Guid.NewGuid(), City = "", District = "" };
        await context.Locations.AddAsync(entity);
        await context.SaveChangesAsync();

        var result = (await repository.GetAsync(entity.Id))!;
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Location>());
            Assert.That(result.Id, Is.EqualTo(entity.Id));
        });
    }
    
    [Test]
    public async Task GetAsync_InvalidId_ReturnsNull()
    {
        var entity = new LocationEntity { Id = Guid.NewGuid(), City = "", District = "" };
        await context.Locations.AddAsync(entity);
        await context.SaveChangesAsync();

        var result = await repository.GetAsync(Guid.NewGuid());
        
        Assert.That(result, Is.Null);
    }
    
    [Test]
    public async Task GetAsync_ReturnsLocationsList()
    {
        var entities = new List<LocationEntity>
        {
            new() { Id = Guid.NewGuid(), City = "", District = "" },
            new() { Id = Guid.NewGuid(), City = "", District = "" }
        };
        await context.Locations.AddRangeAsync(entities);
        await context.SaveChangesAsync();

        var result = await repository.GetAsync();
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<List<Location>>());
            Assert.That(result, Has.Count.EqualTo(2));
        });
    }
    
    [Test]
    public async Task InsertAsync_OldLocation_ReturnsNull()
    {
        var entity = new LocationEntity { Id = Guid.NewGuid(), City = "", District = "" };
        await context.Locations.AddAsync(entity);
        await context.SaveChangesAsync();
        
        var location = new Location { Id = entity.Id, City = "", District = "" };

        var result = await repository.InsertAsync(location);
        
        Assert.That(result, Is.Null);
    }
    
    [Test]
    public async Task InsertAsync_NewLocation_ReturnsLocation()
    {
        var location = new Location { Id = Guid.NewGuid(), City = "", District = "" };

        var result = (await repository.InsertAsync(location))!;
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Location>());
            Assert.That(context.Locations.Count(), Is.EqualTo(1));
            Assert.That(result.Id, Is.EqualTo(location.Id));
        });
    }
    
    [Test]
    public async Task UpdateAsync_InvalidLocation_ReturnsNull()
    {
        var entity = new LocationEntity { Id = Guid.NewGuid(), City = "", District = "" };
        await context.Locations.AddAsync(entity);
        await context.SaveChangesAsync();
        
        var location = new Location { Id = Guid.NewGuid(), City = "", District = "" };

        var result = await repository.UpdateAsync(location);
        
        Assert.That(result, Is.Null);
    }
    
    [Test]
    public async Task UpdateAsync_ValidLocation_ReturnsLocation()
    {
        var id = Guid.NewGuid();
        var entity = new LocationEntity { Id = id, City = "", District = "" };
        await context.Locations.AddAsync(entity);
        await context.SaveChangesAsync();
        context.ChangeTracker.Clear();
        
        var location = new Location { Id = id, City = "X", District = "" };

        var result = (await repository.UpdateAsync(location))!;
        var contextLocation = (await context.Locations.FindAsync(id))!;
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<Location>());
            Assert.That(result.Id, Is.EqualTo(location.Id));
            Assert.That(result.City, Is.EqualTo("X"));
            Assert.That(contextLocation.City, Is.EqualTo("X"));
        });
    }
}