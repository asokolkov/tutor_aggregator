namespace Tools.DataGenerator.DataGeneration;

#nullable enable
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using EFCore.Postgres.Identity;
using EFCore.Postgres.Identity.Models;
using Extensions;
using SPA.Identity.Models;

internal sealed class DataGenerator : IDataGenerator
{
    private readonly ApplicationContext applicationContext;
    private readonly ApplicationIdentityContext identityContext;

    private readonly string[] firstNames = { "Артемий", "Влад", "Алексей", "Михаил", "Илья" };
    private readonly string[] lastNames = { "Курганов", "Бикбулатов", "Соколков", "Ланец", "Жданов" };
    private readonly string[] districts = { "Ленинский", "Орджоникидзевский" };
    private readonly string city = "Ектеринбург";
    private readonly string[] subjectsNames = { "Математика", "Русский язык", "Физика", "Литература", "Информатика" };
    private readonly string[] contacts = { "+70000000000", "+71111111111", "+72222222222", "+73333333333" };
    private readonly AccountType[] accountTypes = { AccountType.Student, AccountType.Tutor };
    private readonly string[] requirements = new[] { "Каво?", "Дети до 14 лет" };
    private readonly string[] jobs = new[] { "Строитель", "Продавец", "Учитель" };
    private readonly string[] educations = new[] { "Школа", "Не школа", "Работа" };
    private readonly string[] awards = new[] { "Учитель года", "Учитель века" };
    private readonly string[] descriptions = new[] { "Неплохой человек", "В прошлом кондитер", "Есть домашние животные" };
    
    private readonly Random random = new();

    public DataGenerator(
        ApplicationContext applicationContext,
        ApplicationIdentityContext identityContext)
    {
        this.applicationContext = applicationContext;
        this.identityContext = identityContext;
    }

    public async Task FillInDatabase()
    {
        var users = CreateApplicationUsers();
        var locations = new List<LocationEntity>();

        foreach (var district in districts)
        {
            var locationEntityEntry = await applicationContext.Locations.AddAsync(new LocationEntity
            {
                City = city,
                Id = Guid.NewGuid(),
                District = district
            });

            locations.Add(locationEntityEntry.Entity);
        }

        var subjects = new List<SubjectEntity>();
        foreach (var name in subjectsNames)
        {
            var subject = new SubjectEntity
            {
                Id = Guid.NewGuid(),
                Description = name
            };

            var subjectEntityEntry = await applicationContext.AddAsync(subject);
            subjects.Add(subjectEntityEntry.Entity);
        }

        var students = new List<StudentEntity>();
        var tutors = new List<TutorEntity>();

        foreach (var user in users)
        {
            identityContext.Add(user);

            switch (user.AccountType)
            {
                case AccountType.Student:
                    var studentEntityEntry = await applicationContext.Students.AddAsync(CreateStudentEntity(user));
                    students.Add(studentEntityEntry.Entity);
                    break;
                case AccountType.Tutor:
                    var tutorEntityEntry =
                        await applicationContext.Tutors.AddAsync(CreateTutorEntity(user,
                            locations[random.Next(locations.Count)], subjects.GetRandomSubEnumerable().ToArray()));
                    tutors.Add(tutorEntityEntry.Entity);
                    break;
                case null:
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        foreach (var tutor in tutors)
        {
            for (var i = 0; i < random.Next(0, 20); i++)
            {
                var start = DateTimeOffset.FromUnixTimeSeconds(random.Next(100000, 1000000));
                var lesson = new LessonEntity
                {
                    Id = Guid.NewGuid(),
                    Tutor = tutor,
                    Student = students[random.Next(0, students.Count)],
                    Price = random.NextDouble() * 10000,
                    Status = (LessonStatus)random.Next(0, 3),
                    Type = (LessonType)random.Next(0, 2),
                    Start = start,
                    End = start + TimeSpan.FromHours(random.NextDouble() * 5)
                };

                await applicationContext.Lessons.AddAsync(lesson);
            }
        }

        foreach (var tutor in tutors)
        {
            for (var i = 0; i < random.Next(0, 50); i++)
            {
                var review = new ReviewEntity
                {
                    Id = Guid.NewGuid(),
                    Description = Guid.NewGuid().ToString(),
                    Tutor = tutor,
                    Student = students[random.Next(0, students.Count)],
                    Rating = random.NextDouble() * 10,
                    UpdatedAt = DateTimeOffset.FromUnixTimeSeconds(random.Next(100000, 1000000))
                };

                await applicationContext.AddAsync(review);
            }
        }


        await identityContext.SaveChangesAsync();
        await applicationContext.SaveChangesAsync();
    }

    private IReadOnlyList<ApplicationUser> CreateApplicationUsers(int count = 100)
    {
        var users = new List<ApplicationUser>();
        for (var i = 0; i < count; i++)
        {
            var user = new ApplicationUser
            {
                Id = Guid.NewGuid(),
                Email = Guid.NewGuid().ToString(),
                FirstName = firstNames[random.Next(firstNames.Length)],
                LastName = lastNames[random.Next(lastNames.Length)],
                AccountType = accountTypes[random.Next(accountTypes.Length)]
            };

            users.Add(user);
        }

        return users;
    }

    private StudentEntity CreateStudentEntity(ApplicationUser user)
    {
        return new StudentEntity
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Contacts = contacts[random.Next(contacts.Length)],
            Description = descriptions[random.Next(descriptions.Length)]
        };
    }

    private TutorEntity CreateTutorEntity(ApplicationUser user, LocationEntity locationEntity, SubjectEntity[] subjects)
    {
        return new TutorEntity
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Location = locationEntity,
            Subjects = subjects,
            Contacts = contacts[random.Next(contacts.Length)],
            Requirements = requirements[random.Next(requirements.Length)],
            Job = jobs[random.Next(jobs.Length)],
            Educations = educations[random.Next(educations.Length)],
            Awards = requirements[random.Next(awards.Length)],
            Description = descriptions[random.Next(descriptions.Length)]
        };
    }
}