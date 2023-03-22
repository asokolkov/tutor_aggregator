using Microsoft.EntityFrameworkCore;
using Tools.DataGenerator.Services;

namespace Tools.DataGenerator.DataGeneration;

using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using EFCore.Postgres.Identity;
using EFCore.Postgres.Identity.Models;
using SPA.Identity.Models;

#nullable enable

internal sealed class DataGenerator : IDataGenerator
{
    private readonly ApplicationContext applicationContext;
    private readonly ApplicationIdentityContext identityContext;
    private static Dictionary<string, List<string?>> data = null!;
    
    private const int TutorsAmount = 50;
    private const int StudentsAmount = 50;

    public DataGenerator(ApplicationContext applicationContext, ApplicationIdentityContext identityContext)
    {
        this.applicationContext = applicationContext;
        this.identityContext = identityContext;
        data = FilesService.GetDataFromJson();
    }

    public async Task FillDatabase()
    {
        var tutors = await CreateTutors();
        var students = await CreateStudents();

        foreach (var student in students)
        {
            student.Contacts = await CreateStudentContacts();
        }

        foreach (var tutor in tutors)
        {
            tutor.Contacts = await CreateTutorContacts();
            tutor.Subjects = await CreateSubjects();
            tutor.Educations = await CreateTutorEducations();
            tutor.Awards = await CreateAwards();
            tutor.Requirements = await CreateRequirements();
            tutor.Location = await CreateLocation();
        }

        await CreateReviews(tutors, students);
        await RecalculateRating(tutors);
        await CreateLessons(tutors, students);

        await identityContext.SaveChangesAsync();
        await applicationContext.SaveChangesAsync();
    }

    private async Task<ICollection<EducationEntity>> CreateTutorEducations()
    {
        var result = new List<EducationEntity>();

        for (var i = 0; i < ExtractionService.GetNumber(); i++)
        {
            var entity = new EducationEntity
            {
                Id = Guid.NewGuid(),
                Value = ExtractionService.Get(data["tutorEducations"])!
            };
            var entry = await applicationContext.Educations.AddAsync(entity);
            result.Add(entry.Entity);
        }

        return result;
    }

    private async Task<ICollection<AwardEntity>> CreateAwards()
    {
        var result = new List<AwardEntity>();

        for (var i = 0; i < ExtractionService.GetNumber(); i++)
        {
            var awardEntity = new AwardEntity
            {
                Id = Guid.NewGuid(),
                Value = ExtractionService.Get(data["awards"])!
            };
            var awardEntry = await applicationContext.Awards.AddAsync(awardEntity);
            result.Add(awardEntry.Entity);
        }

        return result;
    }

    private async Task<ICollection<RequirementEntity>> CreateRequirements()
    {
        var result = new List<RequirementEntity>();

        for (var i = 0; i < ExtractionService.GetNumber(); i++)
        {
            var requirementEntity = new RequirementEntity
            {
                Id = Guid.NewGuid(),
                Value = ExtractionService.Get(data["requirements"])!
            };
            var requirementEntry = await applicationContext.Requirements.AddAsync(requirementEntity);
            result.Add(requirementEntry.Entity);
        }

        return result;
    }

    private async Task CreateLessons(List<TutorEntity> tutors, IReadOnlyCollection<StudentEntity> students)
    {
        foreach (var tutor in tutors)
            for (var i = 0; i < ExtractionService.GetNumber(); i++)
            {
                var startTime = ExtractionService.GetTime();
                var studentExists = ExtractionService.GetDouble() < 0.2;
                var lesson = new LessonEntity
                {
                    Id = Guid.NewGuid(),
                    Tutor = tutor,
                    Student = studentExists ? ExtractionService.Get(students) : null,
                    Price = ExtractionService.GetDouble() * 1000,
                    Status = studentExists ? (LessonStatus)ExtractionService.GetNumber(2) : LessonStatus.Scheduled,
                    Type = (LessonType)ExtractionService.GetNumber(2),
                    Start = startTime,
                    End = startTime + TimeSpan.FromHours(ExtractionService.GetDouble() * 5)
                };

                await applicationContext.Lessons.AddAsync(lesson);
            }
    }

    private async Task RecalculateRating(IEnumerable<TutorEntity> tutors)
    {
        foreach (var tutor in tutors.Where(tutor => tutor.Reviews != null))
            tutor.Rating = tutor.Reviews.Average(x => x.Rating);
    }

    private async Task CreateReviews(List<TutorEntity> tutors, IReadOnlyCollection<StudentEntity> students)
    {
        foreach (var tutor in tutors)
            for (var i = 0; i < ExtractionService.GetNumber(); i++)
                await applicationContext.AddAsync(new ReviewEntity
                {
                    Id = Guid.NewGuid(),
                    Description = Guid.NewGuid().ToString(),
                    Tutor = tutor,
                    Student = ExtractionService.Get(students)!,
                    Rating = ExtractionService.GetDouble() * 10,
                    UpdatedAt = ExtractionService.GetTime()
                });
    }

    private async Task<LocationEntity?> CreateLocation()
    {
        var district = ExtractionService.Get(data["districts"], true);
        if (district == null)
            return null;
        
        var locationEntity = await applicationContext.Locations.FirstOrDefaultAsync(x => x.District == district);
        if (locationEntity != null)
            return locationEntity;

        var locationEntry = await applicationContext.Locations.AddAsync(new LocationEntity
        {
            Id = Guid.NewGuid(),
            City = ExtractionService.Get(data["cities"])!,
            District = district
        });

        return locationEntry.Entity;
    }

    private async Task<ICollection<SubjectEntity>> CreateSubjects()
    {
        var result = new List<SubjectEntity>();
        foreach (var subject in ExtractionService.GetCollection(data["subjects"]))
        {
            var subjectEntity = await applicationContext.Subjects.FirstOrDefaultAsync(x => x.Description == subject);
            if (subjectEntity != null)
                result.Add(subjectEntity);
            else
            {
                var subjectEntry = await applicationContext.Subjects.AddAsync(new SubjectEntity
                {
                    Id = Guid.NewGuid(),
                    Description = subject!
                });

                result.Add(subjectEntry.Entity);
            }
        }

        return result;
    }

    private async Task<List<TutorContactEntity>> CreateTutorContacts()
    {
        var result = new List<TutorContactEntity>();
        for (var i = 0; i < ExtractionService.GetNumber(); i++)
        {
            var usePhones = ExtractionService.GetBoolean();
            var contactEntity = new TutorContactEntity
            {
                Id = Guid.NewGuid(),
                Type = usePhones ? ContactType.Phone : ContactType.Email,
                Value = ExtractionService.Get(usePhones ? data["phones"] : data["emails"])!
            };
            var contactEntry = await applicationContext.TutorsContacts.AddAsync(contactEntity);
            result.Add(contactEntry.Entity);
        }

        return result;
    }

    private async Task<List<StudentContactEntity>> CreateStudentContacts()
    {
        var result = new List<StudentContactEntity>();
        for (var i = 0; i < ExtractionService.GetNumber(); i++)
        {
            var usePhones = ExtractionService.GetBoolean();
            var contactEntity = new StudentContactEntity
            {
                Id = Guid.NewGuid(),
                Type = usePhones ? ContactType.Phone : ContactType.Email,
                Value = ExtractionService.Get(usePhones ? data["phones"] : data["emails"])!
            };
            var contactEntry = await applicationContext.StudentsContacts.AddAsync(contactEntity);
            result.Add(contactEntry.Entity);
        }

        return result;
    }

    private async Task<List<TutorEntity>> CreateTutors()
    {
        var result = new List<TutorEntity>();

        for (var i = 0; i < TutorsAmount; i++)
        {
            var user = CreateUser(AccountType.Tutor);
            identityContext.Add(user);

            var tutorEntity = new TutorEntity
            {
                Id = user.Id,
                FirstName = user.FirstName!,
                LastName = user.LastName!,
                Description = ExtractionService.Get(data["descriptions"], true),
                Job = ExtractionService.Get(data["jobs"], true)
            };
            var tutorEntry = await applicationContext.Tutors.AddAsync(tutorEntity);
            result.Add(tutorEntry.Entity);
        }

        return result;
    }

    private async Task<List<StudentEntity>> CreateStudents()
    {
        var result = new List<StudentEntity>();

        for (var i = 0; i < StudentsAmount; i++)
        {
            var user = CreateUser(AccountType.Student);
            identityContext.Add(user);

            var studentEntity = new StudentEntity
            {
                Id = user.Id,
                FirstName = user.FirstName!,
                LastName = user.LastName!,
                Age = ExtractionService.GetNumber(100, true),
                Description = ExtractionService.Get(data["descriptions"], true),
                EducationPlace = ExtractionService.Get(data["studentEducations"], true),
                Grade = ExtractionService.GetNumber(10, true)
            };
            var studentEntry = await applicationContext.Students.AddAsync(studentEntity);
            result.Add(studentEntry.Entity);
        }

        return result;
    }

    private ApplicationUser CreateUser(AccountType accountType)
    {
        return new ApplicationUser
        {
            Id = Guid.NewGuid(),
            Email = ExtractionService.Get(data["emails"]),
            FirstName = ExtractionService.Get(data["firstNames"]),
            LastName = ExtractionService.Get(data["lastNames"]),
            AccountType = accountType
        };
    }
}