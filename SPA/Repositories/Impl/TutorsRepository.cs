#nullable enable

using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;
using SPA.Domain;

namespace SPA.Repositories.Impl;

public sealed class TutorsRepository : ITutorsRepository
{
    private readonly IApplicationContext context;
    private readonly IMapper mapper;

    public TutorsRepository(IApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<Page<Tutor>> GetPageAsync(int page, int size, string subject, string city,
        string district, int maxPrice, int rating)
    {
        var filteredEntities = await context.Tutors
            .OrderBy(x => x.FirstName)
            .Where(x => rating == -1 || (int)x.Rating == rating)
            .Where(x => city == "" || (x.Location != null ? x.Location.City : null) == city)
            .Where(x => district == "" || (x.Location != null ? x.Location.District : null) == district)
            .Where(x => subject == "" || x.Subjects.FirstOrDefault(y => y.Description == subject) != null)
            .Where(x => maxPrice == -1 || (x.Lessons.Any() ? x.Lessons.Max(y => y.Price) : -1) <= maxPrice)
            .ToListAsync();
        
        var entities = mapper.Map<List<Tutor>>(filteredEntities.Skip(page * size).Take(size));

        return new Page<Tutor>(entities, filteredEntities.Count, page, size);
    }

    public async Task<Tutor?> GetAsync(Guid id)
    {
        var entity = await context.Tutors.FirstOrDefaultAsync(x => x.Id == id);
        return mapper.Map<Tutor>(entity);
    }
    
    public async Task<Page<Review>> GetTutorReviews(Guid id, int page, int size)
    {
        var tutor = await context.Tutors.FirstOrDefaultAsync(x => x.Id == id);

        if (tutor?.Reviews is null)
            return new Page<Review>(Array.Empty<Review>(), 0, page, size);

        var reviews = mapper.Map<List<Review>>(tutor.Reviews.Skip(page * size).Take(size));

        return new Page<Review>(reviews, tutor.Reviews.Count, page, size);
    }

    public async Task<Tutor?> Update(Guid id, UpdateTutor tutor)
    {
        var tutorEntity = await context.Tutors.FindAsync(id);
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
        return mapper.Map<Tutor>(tutorEntity);
    }

    public async Task<Tutor?> Insert(Tutor tutor)
    {
        var tutorEntity = mapper.Map<TutorEntity>(tutor);
        await context.Tutors.AddAsync(tutorEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Tutor>(tutorEntity);
    }
}