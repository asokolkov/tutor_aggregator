using NSubstitute;
using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using MockQueryable.NSubstitute;
using NUnit.Framework;
using SPA.Domain;
using SPA.Repositories.Impl;

namespace Tests.SPA;

public class StudentsRepositoryTests
{
    private List<StudentEntity> data = null!;
    private StudentsRepository repository = null!;

    [SetUp]
    public void Setup()
    {
        data = new List<StudentEntity>
        {
            new() { Id = new Guid("daf362fc-4487-4338-8776-d5bca5bc2632"), FirstName = "A", LastName = "A", Description = "A", Age = 1, Education = null, Lessons = new List<LessonEntity>(), Reviews = new List<ReviewEntity>(), Contacts = new List<StudentContactEntity>() },
            new() { Id = new Guid("40503af9-7569-4015-879e-6f70d0088de1"), FirstName = "B", LastName = "B", Description = "B", Age = 2, Education = null, Lessons = new List<LessonEntity>(), Reviews = new List<ReviewEntity>(), Contacts = new List<StudentContactEntity>() },
            new() { Id = new Guid("3c7ffa34-a234-43dc-ab20-849b211190c2"), FirstName = "C", LastName = "C", Description = "C", Age = 3, Education = null, Lessons = new List<LessonEntity>(), Reviews = new List<ReviewEntity>(), Contacts = new List<StudentContactEntity>() },
        };
        
        var mockSet = data.AsQueryable().BuildMockDbSet();
        var mockContext = Substitute.For<IApplicationContext>();
        
        mockContext.Students.Returns(mockSet);
        
        var config = new MapperConfiguration(cfg => cfg.CreateMap<StudentEntity, Student>());
        var mapper = new Mapper(config);

        repository = new StudentsRepository(mockContext, mapper);
    }

    [Test]
    public async Task GetAsync_Test()
    {
        var studentA = await repository.GetAsync(data[0].Id);
        var studentB = await repository.GetAsync(Guid.NewGuid());
        
        Assert.Multiple(() =>
        {
            Assert.That(studentA?.Id, Is.EqualTo(data[0].Id));
            Assert.That(studentA, Is.InstanceOf<Student>());
            Assert.That(studentB, Is.Null);
        });
    }
    
    [Test]
    public async Task GetAsync_Page_Test()
    {
        const int size = 1;
        var pageA = await repository.GetAsync(0, size);
        var pageB = await repository.GetAsync(data.Count - 1, size);
        var pageC = await repository.GetAsync(data.Count, size);
        
        Assert.Multiple(() =>
        {
            Assert.That(pageA, Is.InstanceOf<Page<Student>>());
            Assert.That(pageA.Items, Has.Count.EqualTo(size));
            Assert.That(pageA.TotalCount, Is.EqualTo(data.Count));
            Assert.That(pageA.HasNext, Is.True);
            Assert.That(pageA.HasPrevious, Is.False);
            
            Assert.That(pageB.HasNext, Is.False);
            Assert.That(pageB.HasPrevious, Is.True);
            
            Assert.That(pageC.Items, Has.Count.EqualTo(0));
            Assert.That(pageC.HasNext, Is.False);
            Assert.That(pageC.HasPrevious, Is.True);
        });
    }
}