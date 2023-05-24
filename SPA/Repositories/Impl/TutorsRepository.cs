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

        return new Page<Tutor>(tutors, table.Count(), page, size);
    }

    public async Task<Tutor?> GetAsync(Guid id)
    {
        return mapper.Map<Tutor>(await table.FindAsync(id));
    }

    public async Task<Tutor?> Update(Guid id, UpdateTutor updateTutor)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            var tutorEntity = await table.FindAsync(id);
            if (tutorEntity is null)
                return null;

            var tutor = mapper.Map<TutorEntity>(updateTutor);

            tutorEntity.FirstName = tutor.FirstName;
            tutorEntity.LastName = tutor.LastName;
            tutorEntity.Age = tutor.Age;
            tutorEntity.Job = tutor.Job;
            tutorEntity.Description = tutor.Description;

            if (tutor.Location is null)
            {
                tutorEntity.Location = null;
            }
            else
            {
                var locationEntity = await context.Locations.FindAsync(tutor.Location.Id);
                if (locationEntity is null)
                    return null;
                tutorEntity.Location = locationEntity;
            }
            
            if (tutor.Subjects.Count == 0)
            {
                tutorEntity.Subjects = new List<SubjectEntity>();
            }
            else
            {
                var newSubjects = new List<SubjectEntity>();
                foreach (var subject in tutor.Subjects)
                {
                    var subjectEntity = await context.Subjects.FindAsync(subject.Id);
                    if (subjectEntity is null)
                        return null;
                    newSubjects.Add(subjectEntity);
                }
                tutorEntity.Subjects = newSubjects;
            }
            
            

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
            return new Page<Review>(Array.Empty<Review>(), 0, page, size);

        var reviewsEntities = tutor.Reviews
            .Skip(page * size)
            .Take(size)
            .ToList();
        var reviews = mapper.Map<List<Review>>(reviewsEntities);

        return new Page<Review>(reviews, tutor.Reviews.Count, page, size);
    }
}