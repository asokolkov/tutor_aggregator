#nullable enable

using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using SPA.Domain;
using DomainLessonType = SPA.Domain.LessonType;
using EntityLessonType = EFCore.Postgres.Application.Models.Entities.LessonType;
using LessonStatus = EFCore.Postgres.Application.Models.Entities.LessonStatus;

namespace SPA.Repositories.Impl;

internal sealed class TutorsRepository : ITutorsRepository
{
    private readonly ApplicationContext context;
    private readonly IMapper mapper;

    public TutorsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<Tutor?> GetAsync(Guid id)
    {
        return mapper.Map<Tutor>(await context.Tutors.FindAsync(id));
    }

    public async Task<Page<Tutor>> GetPageAsync(int page, int size, string? subject, string? city, string? district,
        int? maxPrice, int? rating, DomainLessonType? lessonsType)
    {
        var filteredEntities = await context.Tutors
            .OrderBy(x => x.Id)
            .Where(x => x.Subjects.Count > 0)
            .Where(x => city == null || lessonsType == DomainLessonType.Online || x.Location == null || x.Location.City == city)
            .Where(x => district == null || lessonsType == DomainLessonType.Online || x.Location == null || x.Location.District == district)
            .Where(x => subject == null || x.Subjects.FirstOrDefault(y => y.Description == subject) != null)
            .Where(x => rating == null || x.Rating >= rating)
            .Where(x => maxPrice == null || x.Lessons.Any(y => y.Price <= maxPrice && y.Status != LessonStatus.Deleted))
            .Where(x => lessonsType == null || x.Lessons.Any(y => y.Type == (EntityLessonType)lessonsType && y.Status != LessonStatus.Deleted))
            .ToListAsync();

        var entities = mapper.Map<List<Tutor>>(filteredEntities.Skip(page * size).Take(size));

        return new Page<Tutor>(entities, filteredEntities.Count, page, size);
    }

    public async Task<Tutor?> InsertAsync(Tutor tutor)
    {
        var entity = mapper.Map<TutorEntity>(tutor);
        var entry = await context.Tutors.AddAsync(entity);
        await context.SaveChangesAsync();
        return mapper.Map<Tutor>(entry.Entity);
    }

    public async Task<Tutor?> UpdateAsync(Guid id, UpdateTutor updateTutor)
    {
        var entity = await context.Tutors.FindAsync(id);
        if (entity is null)
            return null;

        var modelEntity = mapper.Map<TutorEntity>(updateTutor);

        entity.FirstName = modelEntity.FirstName;
        entity.LastName = modelEntity.LastName;
        entity.Age = modelEntity.Age;
        entity.Job = modelEntity.Job;
        entity.Description = modelEntity.Description;

        context.Awards.RemoveRange(entity.Awards);
        var awardsEntities = new List<AwardEntity>();
        foreach (var award in modelEntity.Awards)
        {
            var newAward = new AwardEntity
            {
                Id = award.Id != default ? award.Id : Guid.NewGuid(),
                Value = award.Value
            };
            awardsEntities.Add((await context.Awards.AddAsync(newAward)).Entity);
        }
        entity.Awards = awardsEntities;

        context.TutorEducations.RemoveRange(entity.Educations);
        var educationsEntities = new List<TutorEducationEntity>();
        foreach (var education in modelEntity.Educations)
        {
            var newEducation = new TutorEducationEntity
            {
                Id = education.Id != default ? education.Id : Guid.NewGuid(),
                Value = education.Value
            };
            educationsEntities.Add((await context.TutorEducations.AddAsync(newEducation)).Entity);
        }
        entity.Educations = educationsEntities;

        context.TutorsContacts.RemoveRange(entity.Contacts);
        var contactsEntities = new List<TutorContactEntity>();
        foreach (var contact in modelEntity.Contacts)
        {
            var newContact = new TutorContactEntity
            {
                Id = contact.Id != default ? contact.Id : Guid.NewGuid(),
                Type = contact.Type,
                Value = contact.Value
            };
            contactsEntities.Add((await context.TutorsContacts.AddAsync(newContact)).Entity);
        }
        entity.Contacts = contactsEntities;

        context.Requirements.RemoveRange(entity.Requirements);
        var requirementsEntities = new List<RequirementEntity>();
        foreach (var requirement in modelEntity.Requirements)
        {
            var newRequirement = new RequirementEntity
            {
                Id = requirement.Id != default ? requirement.Id : Guid.NewGuid(),
                Value = requirement.Value
            };
            requirementsEntities.Add((await context.Requirements.AddAsync(newRequirement)).Entity);
        }
        entity.Requirements = requirementsEntities;

        if (modelEntity.Location is null)
        {
            entity.Location = null;
        }
        else
        {
            var locationEntity = await context.Locations.FirstOrDefaultAsync(x => x.City == modelEntity.Location.City && x.District == modelEntity.Location.District);
            if (locationEntity is null)
                return null;
            entity.Location = locationEntity;
        }

        if (modelEntity.Subjects.Count == 0)
        {
            entity.Subjects = new List<SubjectEntity>();
        }
        else
        {
            var newSubjects = new List<SubjectEntity>();
            foreach (var subject in modelEntity.Subjects)
            {
                var subjectEntity = await context.Subjects.FirstOrDefaultAsync(x => x.Description == subject.Description);
                if (subjectEntity is null)
                    return null;
                newSubjects.Add(subjectEntity);
            }
            entity.Subjects = newSubjects;
        }
        
        try
        {
            await context.SaveChangesAsync();
        }
        catch (Exception exception)
        {
            return null;
        }

        return mapper.Map<Tutor>(entity);
    }

    public async Task<Page<Review>> GetTutorReviewsAsync(Guid id, int page, int size)
    {
        var entity = await context.Tutors.FindAsync(id);
        if (entity?.Reviews is null)
            return new Page<Review>(Array.Empty<Review>(), 0, page, size);

        var reviewsEntities = entity.Reviews
            .Skip(page * size)
            .Take(size)
            .ToList();
        var reviews = mapper.Map<List<Review>>(reviewsEntities);

        return new Page<Review>(reviews, entity.Reviews.Count, page, size);
    }
}