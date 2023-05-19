#nullable enable

using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using SPA.Domain;

namespace SPA.Repositories.Impl;

internal sealed class TutorsRepository : ITutorsRepository
{
    private readonly ApplicationContext context;
    private readonly IMapper mapper;
    private readonly DbSet<TutorEntity> table;

    public TutorsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
        table = context.Tutors;
    }

    public async Task<Page<Tutor>> GetAsync(int page, int size, string subject, string city, string district, int maxPrice,
        int rating)
    {
        var tutorsEntities = await table
            .OrderBy(x => x)
            .Where(x => (int)x.Rating == rating || rating == -1)
            .Where(x => (x.Location != null ? x.Location.City : null) == city || city == "")
            .Where(x => (x.Location != null ? x.Location.District : null) == district || district == "")
            .Where(x => x.Subjects.FirstOrDefault(y => y.Description == subject) != null || subject == "")
            .Where(x => x.Lessons.Max(y => y.Price) <= maxPrice || maxPrice == -1)
            .Skip(page * size)
            .Take(size)
            .ToListAsync();
        var tutors = mapper.Map<List<Tutor>>(tutorsEntities);
        
        var entitiesAmount = table.Count();
        var lastPage = (int)Math.Ceiling((double)entitiesAmount / size) - 1;

        return new Page<Tutor>(tutors, entitiesAmount, 0 < page && page <= lastPage + 1, page < lastPage);
    }

    public async Task<Tutor?> GetAsync(Guid id)
    {
        return mapper.Map<Tutor>(await table.FindAsync(id));
    }

    public async Task<Tutor?> Update(Guid id, UpdateTutor tutor)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            var tutorEntity = await table.FindAsync(id);
            if (tutorEntity is null)
                return null;

            tutorEntity.FirstName = tutor.FirstName;
            tutorEntity.LastName = tutor.LastName;
            tutorEntity.Description = tutor.Description;
            tutorEntity.Job = tutor.Job;
            tutorEntity.Location = mapper.Map<LocationEntity>(tutor.Location);

            var educationsEntities = mapper.Map<ICollection<TutorEducationEntity>>(tutor.Educations).ToList();
            foreach (var educationEntity in educationsEntities)
            {
                var education = await context.TutorEducations.FindAsync(educationEntity.Id);
                if (education is null)
                    context.TutorEducations.Add(educationEntity);
            }

            tutorEntity.Educations = educationsEntities;

            var awardsEntities = mapper.Map<ICollection<AwardEntity>>(tutor.Awards).ToList();
            foreach (var awardEntity in awardsEntities)
            {
                var award = await context.Awards.FindAsync(awardEntity.Id);
                if (award is null)
                    context.Awards.Add(awardEntity);
            }

            tutorEntity.Awards = awardsEntities;

            var requirementsEntities = mapper.Map<ICollection<RequirementEntity>>(tutor.Requirements).ToList();
            foreach (var requirementEntity in requirementsEntities)
            {
                var requirement = await context.Requirements.FindAsync(requirementEntity.Id);
                if (requirement is null)
                    context.Requirements.Add(requirementEntity);
            }

            tutorEntity.Requirements = requirementsEntities;

            var contactsEntities = mapper.Map<ICollection<TutorContactEntity>>(tutor.Contacts).ToList();
            foreach (var contactEntity in contactsEntities)
            {
                var contact = await context.TutorsContacts.FindAsync(contactEntity.Id);
                if (contact is null)
                    context.TutorsContacts.Add(contactEntity);
            }

            tutorEntity.Contacts = contactsEntities;

            var subjectsEntities = mapper.Map<ICollection<SubjectEntity>>(tutor.Subjects).ToList();
            for (var i = 0; i < subjectsEntities.Count; i++)
            {
                var subject = await context.Subjects.FindAsync(subjectsEntities[i].Id);
                if (subject is null)
                    context.Subjects.Add(subjectsEntities[i]);
                else
                    subjectsEntities[i] = subject;
            }

            tutorEntity.Subjects = subjectsEntities;

            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Tutor>(tutorEntity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeUpdate");
            return default;
        }
    }

    public async Task<Tutor?> Insert(Tutor tutor)
    {
        var tutorEntity = mapper.Map<TutorEntity>(tutor);
        await table.AddAsync(tutorEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Tutor>(tutorEntity);
    }

    public async Task<Page<Review>> GetTutorReviews(Guid id, int page, int size)
    {
        var tutor = await context.Tutors.FindAsync(id);

        if (tutor?.Reviews is null)
            return new Page<Review>(Array.Empty<Review>(), 0, false, false);

        var reviewsEntities = tutor.Reviews
            .Skip(page * size)
            .Take(size)
            .ToList();
        var reviews = mapper.Map<List<Review>>(reviewsEntities);
        
        var entitiesAmount = tutor.Reviews.Count;
        var lastPage = (int)Math.Ceiling((double)entitiesAmount / size) - 1;

        return new Page<Review>(reviews, tutor.Reviews.Count, 0 < page && page <= lastPage + 1, page < lastPage);
    }
}