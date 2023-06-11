using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using SPA.Domain;
using SPA.Repositories.Impl;

namespace Tests.SPA.RepositoriesTests;

internal sealed class AvatarsRepositoryTests
{
    private ApplicationContext context = null!;
    private AvatarsRepository repository = null!;
    
    [SetUp]
    public void SetUp()
    {
        var mapperConfig = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<Avatar, AvatarEntity>();
        });
        var mapper = new Mapper(mapperConfig);
        var dbContextOptions = new DbContextOptionsBuilder<ApplicationContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString());
        
        context = new ApplicationContext(dbContextOptions.Options);
        context.Database.EnsureCreated();
        repository = new AvatarsRepository(context, mapper);
    }

    [TearDown]
    public void TearDown()
    {
        context.Database.EnsureDeleted();
    }
    
    [Test]
    public async Task GetAsync_ValidId_ReturnsImage()
    {
        var entity = new AvatarEntity { Id = Guid.NewGuid(), Image = new byte[5] };
        await context.Avatars.AddAsync(entity);
        await context.SaveChangesAsync();

        var result = await repository.GetAsync(entity.Id);
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<byte[]>());
            Assert.That(result, Is.EqualTo(entity.Image));
        });
    }
    
    [Test]
    public async Task GetAsync_InvalidId_ReturnsNull()
    {
        var entity = new AvatarEntity { Id = Guid.NewGuid(), Image = new byte[5] };
        await context.Avatars.AddAsync(entity);
        await context.SaveChangesAsync();

        var result = await repository.GetAsync(Guid.NewGuid());

        Assert.That(result, Is.Null);
    }
    
    [Test]
    public async Task InsertAsync_SameAvatar_ReturnsImage()
    {
        var entity = new AvatarEntity { Id = Guid.NewGuid(), Image = new byte[5] };
        await context.Avatars.AddAsync(entity);
        await context.SaveChangesAsync();
        
        var model = new Avatar { Id = entity.Id, Image = new byte[4] };

        var result = await repository.InsertAsync(model);

        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<byte[]>());
            Assert.That(result, Is.EqualTo(model.Image));
        });
    }
    
    [Test]
    public async Task InsertAsync_NewAvatar_ReturnsImage()
    {
        var entity = new AvatarEntity { Id = Guid.NewGuid(), Image = new byte[5] };
        await context.Avatars.AddAsync(entity);
        await context.SaveChangesAsync();
        
        var model = new Avatar { Id = Guid.NewGuid(), Image = new byte[4] };

        var result = await repository.InsertAsync(model);

        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<byte[]>());
            Assert.That(result, Is.EqualTo(model.Image));
        });
    }
}