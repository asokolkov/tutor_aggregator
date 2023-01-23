namespace SPA.Repositories.Impl;

using AutoMapper;
using Data;
using Domain;
using Entities;
using Microsoft.EntityFrameworkCore;

#nullable enable

internal sealed class TutorsRepository : ITutorsRepository
{
    private readonly ApplicationContext context;
    private readonly DbSet<TutorEntity> table;
    private readonly IMapper mapper;

    public TutorsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
        table = context.Tutors;
    }

    public async Task<Page<Tutor>> Get(int page, int size, string subject, string city, string district, int maxPrice,
        int rating)
    {
        var tutorsEntities = await table
            .OrderBy(x => x)
            .Where(x => (int)x.Rating == rating || rating == -1)
            .Where(x => x.Location.City == city || city == "")
            .Where(x => x.Location.District == district || district == "")
            .Where(x => x.Subjects.FirstOrDefault(y => y.Description == subject) != null || subject == "")
            .Where(x => x.Lessons.Max(y => y.Price) <= maxPrice || maxPrice == -1)
            .Skip(page * size)
            .Take(size)
            .ToListAsync();

        var tutors = mapper.Map<List<Tutor>>(tutorsEntities);
        return new Page<Tutor>(tutors);
    }

    public async Task<Tutor?> Get(Guid id)
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
                return default;
            
            tutorEntity.FirstName = tutor.FirstName;
            tutorEntity.LastName = tutor.LastName;
            tutorEntity.Job = tutor.Job;
            tutorEntity.Contacts = tutor.Contacts;
            tutorEntity.Educations = tutor.Educations;
            tutorEntity.Awards = tutor.Awards;
            tutorEntity.Requirements = tutor.Requirements;
            
            var locationEntity = mapper.Map<LocationEntity>(tutor.Location);
            var location = await context.Locations.FindAsync(locationEntity.Id);
            if (location is null)
                context.Locations.Add(locationEntity);
            else
                locationEntity = location;
            tutorEntity.Location = locationEntity;
            
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
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            var tutorEntity = mapper.Map<TutorEntity>(tutor);
            var entityEntry = await table.AddAsync(tutorEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Tutor>(entityEntry.Entity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
    }

    public async Task<Page<Review>> GetTutorReviews(Guid id, int page, int size)
    {
        var tutor = await context.Tutors.FindAsync(id);
        
        if (tutor?.Reviews is null)
            return new Page<Review>(Array.Empty<Review>());
        
        var reviewsEntities = tutor.Reviews
            .ToList()
            .Skip(page * size)
            .Take(size)
            .ToList();
        var reviews = mapper.Map<List<Review>>(reviewsEntities);
        return new Page<Review>(reviews);
    }
}