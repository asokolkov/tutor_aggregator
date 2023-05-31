using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using MockQueryable.NSubstitute;
using NSubstitute;
using NUnit.Framework;
using SPA.Domain;
using SPA.Repositories.Impl;

namespace Tests.SPA;

internal sealed class TutorRepositoryTests
{
    private const int PageSize = 1;
    private List<TutorEntity> data = null!;
    private TutorsRepository repository = null!;

    [SetUp]
    public void Setup()
    {
        data = new List<TutorEntity>
        {
            new()
            {
                Id = new Guid("daf362fc-4487-4338-8776-d5bca5bc2632"), FirstName = "A", LastName = "A",
                Description = "A", Age = 1, Educations = new List<TutorEducationEntity>(), Lessons = new List<LessonEntity>(),
                Reviews = new List<ReviewEntity>(), Contacts = new List<TutorContactEntity>(), Rating = 1, Job = "A",
                Location = new LocationEntity(), Awards = new List<AwardEntity>(), Requirements = new List<RequirementEntity>(), 
                Subjects = new List<SubjectEntity>()
            },
            new()
            {
                Id = new Guid("40503af9-7569-4015-879e-6f70d0088de1"), FirstName = "B", LastName = "B",
                Description = "B", Age = 2, Educations = new List<TutorEducationEntity>(), Lessons = new List<LessonEntity>(),
                Reviews = new List<ReviewEntity>(), Contacts = new List<TutorContactEntity>(), Rating = 2, Job = "B",
                Location = new LocationEntity(), Awards = new List<AwardEntity>(), Requirements = new List<RequirementEntity>(), 
                Subjects = new List<SubjectEntity>()
            },
            new()
            {
                Id = new Guid("3c7ffa34-a234-43dc-ab20-849b211190c2"), FirstName = "C", LastName = "C",
                Description = "C", Age = 3, Educations = new List<TutorEducationEntity>(), Lessons = new List<LessonEntity>(),
                Reviews = new List<ReviewEntity>(), Contacts = new List<TutorContactEntity>(), Rating = 3, Job = "C",
                Location = new LocationEntity(), Awards = new List<AwardEntity>(), Requirements = new List<RequirementEntity>(), 
                Subjects = new List<SubjectEntity>()
            }
        };

        var mockSet = data.AsQueryable().BuildMockDbSet();
        var mockContext = Substitute.For<IApplicationContext>();

        mockContext.Tutors.Returns(mockSet);

        var config = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<TutorEntity, Tutor>();
            cfg.CreateMap<LocationEntity, Location>();
        });
        var mapper = new Mapper(config);

        repository = new TutorsRepository(mockContext, mapper);
    }

    [Test]
    public async Task GetAsync_ExistingTutor_ReturnsTutor()
    {
        var entity = await repository.GetAsync(data[0].Id);
        Assert.Multiple(() =>
        {
            Assert.That(entity!.Id, Is.EqualTo(data[0].Id));
            Assert.That(entity, Is.InstanceOf<Tutor>());
        });
    }

    [Test]
    public async Task GetAsync_NonExistingTutor_ReturnsNull()
    {
        var entity = await repository.GetAsync(Guid.NewGuid());
        Assert.That(entity, Is.Null);
    }

    [Test]
    public async Task GetPageAsync_FirstPage_ReturnsPage()
    {
        var page = await repository.GetPageAsync(0, PageSize, "", "", "", -1, -1);
        Assert.Multiple(() =>
        {
            Assert.That(page, Is.InstanceOf<Page<Tutor>>());
            Assert.That(page.Items, Has.Count.EqualTo(PageSize));
            Assert.That(page.TotalCount, Is.EqualTo(data.Count));
            Assert.That(page.HasNext, Is.True);
            Assert.That(page.HasPrevious, Is.False);
        });
    }
    
    [Test]
    public async Task GetPageAsync_LastPage_ReturnsPage()
    {
        var page = await repository.GetPageAsync(data.Count - 1, PageSize, "", "", "", -1, -1);
        Assert.Multiple(() =>
        {
            Assert.That(page, Is.InstanceOf<Page<Tutor>>());
            Assert.That(page.Items, Has.Count.EqualTo(PageSize));
            Assert.That(page.TotalCount, Is.EqualTo(data.Count));
            Assert.That(page.HasNext, Is.False);
            Assert.That(page.HasPrevious, Is.True);
        });
    }
    
    [Test]
    public async Task GetPageAsync_AfterLastPage_ReturnsPage()
    {
        var page = await repository.GetPageAsync(data.Count, PageSize, "", "", "", -1, -1);
        Assert.Multiple(() =>
        {
            Assert.That(page, Is.InstanceOf<Page<Tutor>>());
            Assert.That(page.Items, Has.Count.EqualTo(0));
            Assert.That(page.TotalCount, Is.EqualTo(3));
            Assert.That(page.HasNext, Is.False);
            Assert.That(page.HasPrevious, Is.True);
        });
    }
}