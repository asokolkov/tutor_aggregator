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
    private const int PageSize = 1;

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
    public async Task GetAsync_ExistingStudent_ReturnsStudent()
    {
        var student = await repository.GetAsync(data[0].Id);
        Assert.Multiple(() =>
        {
            Assert.That(student!.Id, Is.EqualTo(data[0].Id));
            Assert.That(student, Is.InstanceOf<Student>());
        });
    }
    
    [Test]
    public async Task GetAsync_NonExistingStudent_ReturnsNull()
    {
        var student = await repository.GetAsync(Guid.NewGuid());
        Assert.That(student, Is.Null);
    }

    [Test]
    public async Task GetPageAsync_FirstPage_ReturnsPage()
    {
        var page = await repository.GetPageAsync(0, PageSize);
        Assert.Multiple(() =>
        {
            Assert.That(page, Is.InstanceOf<Page<Student>>());
            Assert.That(page.Items, Has.Count.EqualTo(PageSize));
            Assert.That(page.TotalCount, Is.EqualTo(data.Count));
            Assert.That(page.HasNext, Is.True);
            Assert.That(page.HasPrevious, Is.False);
        });
    }
    
    [Test]
    public async Task GetPageAsync_LastPage_ReturnsPage()
    {
        var page = await repository.GetPageAsync(data.Count - 1, PageSize);
        Assert.Multiple(() =>
        {
            Assert.That(page, Is.InstanceOf<Page<Student>>());
            Assert.That(page.Items, Has.Count.EqualTo(PageSize));
            Assert.That(page.TotalCount, Is.EqualTo(data.Count));
            Assert.That(page.HasNext, Is.False);
            Assert.That(page.HasPrevious, Is.True);
        });
    }
    
    [Test]
    public async Task GetPageAsync_AfterLastPage_ReturnsPage()
    {
        var page = await repository.GetPageAsync(data.Count, PageSize);
        Assert.Multiple(() =>
        {
            Assert.That(page, Is.InstanceOf<Page<Student>>());
            Assert.That(page.Items, Has.Count.EqualTo(0));
            Assert.That(page.TotalCount, Is.EqualTo(3));
            Assert.That(page.HasNext, Is.False);
            Assert.That(page.HasPrevious, Is.True);
        });
    }
}