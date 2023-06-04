// using AutoMapper;
// using EFCore.Postgres.Application.Contexts;
// using EFCore.Postgres.Application.Models.Entities;
// using MockQueryable.NSubstitute;
// using NSubstitute;
// using NUnit.Framework;
// using SPA.Domain;
// using SPA.Repositories.Impl;
//
// namespace Tests.SPA.RepositoriesTests;
//
// internal sealed class TutorRepositoryTests
// {
//     private const int PageSize = 1;
//     private List<TutorEntity> data = null!;
//     private TutorsRepository repository = null!;
//
//     [SetUp]
//     public void Setup()
//     {
//         data = new List<TutorEntity>
//         {
//             new()
//             {
//                 Id = Guid.NewGuid(), 
//                 FirstName = "A", 
//                 LastName = "A", 
//                 Description = "A", 
//                 Job = "A", 
//                 Age = 1, 
//                 Rating = 1,
//                 Location = new LocationEntity { Id = Guid.NewGuid(), City = "X", District = "X" },
//                 Educations = new List<TutorEducationEntity>(), 
//                 Lessons = new List<LessonEntity>(),
//                 Reviews = new List<ReviewEntity>
//                 {
//                     new() { Id = Guid.NewGuid(), Description = "A1", Rating = 1 },
//                     new() { Id = Guid.NewGuid(), Description = "A2", Rating = 2 }
//                 }, 
//                 Contacts = new List<TutorContactEntity>(),
//                 Awards = new List<AwardEntity>(), 
//                 Requirements = new List<RequirementEntity>(), 
//                 Subjects = new List<SubjectEntity>()
//             },
//             new()
//             {
//                 Id = Guid.NewGuid(), 
//                 FirstName = "B", 
//                 LastName = "B", 
//                 Description = "B", 
//                 Job = "B", 
//                 Age = 2, 
//                 Rating = 2,
//                 Location = new LocationEntity(),
//                 Educations = new List<TutorEducationEntity>(), 
//                 Lessons = new List<LessonEntity>(),
//                 Reviews = new List<ReviewEntity>(), 
//                 Contacts = new List<TutorContactEntity>(),
//                 Awards = new List<AwardEntity>(), 
//                 Requirements = new List<RequirementEntity>(), 
//                 Subjects = new List<SubjectEntity>
//                 {
//                     new() { Id = Guid.NewGuid(), Description = "X" },
//                     new() { Id = Guid.NewGuid(), Description = "Y" }
//                 }
//             },
//             new()
//             {
//                 Id = Guid.NewGuid(), 
//                 FirstName = "C", 
//                 LastName = "C", 
//                 Description = "C", 
//                 Job = "C", 
//                 Age = 3, 
//                 Rating = 3,
//                 Location = new LocationEntity { Id = Guid.NewGuid(), City = "Y", District = "Y" },
//                 Educations = new List<TutorEducationEntity>(), 
//                 Lessons = new List<LessonEntity>(),
//                 Reviews = new List<ReviewEntity>(), 
//                 Contacts = new List<TutorContactEntity>(),
//                 Awards = new List<AwardEntity>(), 
//                 Requirements = new List<RequirementEntity>(), 
//                 Subjects = new List<SubjectEntity>
//                 {
//                     new() { Id = Guid.NewGuid(), Description = "X" }
//                 }
//             }
//         };
//
//         var mockSet = data.AsQueryable().BuildMockDbSet();
//         var mockContext = Substitute.For<ApplicationContext>();
//
//         mockContext.Tutors.Returns(mockSet);
//
//         var config = new MapperConfiguration(cfg =>
//         {
//             cfg.CreateMap<TutorEntity, Tutor>().ReverseMap();
//             cfg.CreateMap<LocationEntity, Location>().ReverseMap();
//             cfg.CreateMap<SubjectEntity, Subject>().ReverseMap();
//             cfg.CreateMap<ReviewEntity, Review>().ReverseMap();
//         });
//         var mapper = new Mapper(config);
//
//         repository = new TutorsRepository(mockContext, mapper);
//     }
//
//     [Test]
//     public async Task GetAsync_ExistingTutor_ReturnsTutor()
//     {
//         var entity = await repository.GetAsync(data[0].Id);
//         Assert.Multiple(() =>
//         {
//             Assert.That(entity!.Id, Is.EqualTo(data[0].Id));
//             Assert.That(entity, Is.InstanceOf<Tutor>());
//         });
//     }
//
//     [Test]
//     public async Task GetAsync_NonExistingTutor_ReturnsNull()
//     {
//         var entity = await repository.GetAsync(Guid.NewGuid());
//         Assert.That(entity, Is.Null);
//     }
//
//     [Test]
//     public async Task GetPageAsync_FirstPage_ReturnsPage()
//     {
//         var page = await repository.GetPageAsync(0, PageSize, "", "", "", -1, -1);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Tutor>>());
//             Assert.That(page.Items, Has.Count.EqualTo(PageSize));
//             Assert.That(page.TotalCount, Is.EqualTo(data.Count));
//             Assert.That(page.HasNext, Is.True);
//             Assert.That(page.HasPrevious, Is.False);
//         });
//     }
//     
//     [Test]
//     public async Task GetPageAsync_LastPage_ReturnsPage()
//     {
//         var page = await repository.GetPageAsync(data.Count - 1, PageSize, "", "", "", -1, -1);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Tutor>>());
//             Assert.That(page.Items, Has.Count.EqualTo(PageSize));
//             Assert.That(page.TotalCount, Is.EqualTo(data.Count));
//             Assert.That(page.HasNext, Is.False);
//             Assert.That(page.HasPrevious, Is.True);
//         });
//     }
//     
//     [Test]
//     public async Task GetPageAsync_AfterLastPage_ReturnsPage()
//     {
//         var page = await repository.GetPageAsync(data.Count, PageSize, "", "", "", -1, -1);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Tutor>>());
//             Assert.That(page.Items, Has.Count.Zero);
//             Assert.That(page.TotalCount, Is.EqualTo(3));
//             Assert.That(page.HasNext, Is.False);
//             Assert.That(page.HasPrevious, Is.True);
//         });
//     }
//     
//     [Test]
//     public async Task GetPageAsync_SubjectFilter_ReturnsPage()
//     {
//         var page = await repository.GetPageAsync(0, PageSize, "X", "", "", -1, -1);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Tutor>>());
//             Assert.That(page.Items, Has.Count.EqualTo(PageSize));
//             Assert.That(page.TotalCount, Is.EqualTo(2));
//             Assert.That(page.HasNext, Is.True);
//             Assert.That(page.HasPrevious, Is.False);
//         });
//     }
//     
//     [Test]
//     public async Task GetPageAsync_CityFilter_ReturnsPage()
//     {
//         var page = await repository.GetPageAsync(0, PageSize, "", "X", "", -1, -1);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Tutor>>());
//             Assert.That(page.Items, Has.Count.EqualTo(PageSize));
//             Assert.That(page.TotalCount, Is.EqualTo(1));
//             Assert.That(page.HasNext, Is.False);
//             Assert.That(page.HasPrevious, Is.False);
//         });
//     }
//     
//     [Test]
//     public async Task GetPageAsync_DistrictFilter_ReturnsPage()
//     {
//         var page = await repository.GetPageAsync(0, PageSize, "", "", "Y", -1, -1);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Tutor>>());
//             Assert.That(page.Items, Has.Count.EqualTo(PageSize));
//             Assert.That(page.TotalCount, Is.EqualTo(1));
//             Assert.That(page.HasNext, Is.False);
//             Assert.That(page.HasPrevious, Is.False);
//         });
//     }
//     
//     [Test]
//     public async Task GetTutorReviews_FirstPage_ReturnsPage()
//     {
//         var page = await repository.GetTutorReviews(data[0].Id, 0, PageSize);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Review>>());
//             Assert.That(page.Items, Has.Count.EqualTo(PageSize));
//             Assert.That(page.TotalCount, Is.EqualTo(2));
//             Assert.That(page.HasNext, Is.True);
//             Assert.That(page.HasPrevious, Is.False);
//         });
//     }
//     
//     [Test]
//     public async Task GetTutorReviews_WrongTutorId_ReturnsEmptyPage()
//     {
//         var page = await repository.GetTutorReviews(Guid.NewGuid(), 0, PageSize);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Review>>());
//             Assert.That(page.Items, Has.Count.Zero);
//             Assert.That(page.TotalCount, Is.Zero);
//             Assert.That(page.HasNext, Is.False);
//             Assert.That(page.HasPrevious, Is.False);
//         });
//     }
//     
//     [Test]
//     public async Task GetTutorReviews_EmptyReviews_ReturnsEmptyPage()
//     {
//         var page = await repository.GetTutorReviews(data[1].Id, 0, PageSize);
//         Assert.Multiple(() =>
//         {
//             Assert.That(page, Is.InstanceOf<Page<Review>>());
//             Assert.That(page.Items, Has.Count.Zero);
//             Assert.That(page.TotalCount, Is.Zero);
//             Assert.That(page.HasNext, Is.False);
//             Assert.That(page.HasPrevious, Is.False);
//         });
//     }
// }