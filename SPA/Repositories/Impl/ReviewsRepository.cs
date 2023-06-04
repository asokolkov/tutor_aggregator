#nullable enable

using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using SPA.Domain;

namespace SPA.Repositories.Impl;

internal sealed class ReviewsRepository : IReviewsRepository
{
    private readonly ApplicationContext context;
    private readonly IMapper mapper;

    public ReviewsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<Review?> Insert(Guid tutorId, Guid studentId, Review review)
    {
        var tutor = await context.Tutors.FindAsync(tutorId);
        if (tutor is null)
            return null;

        var student = await context.Students.FindAsync(studentId);
        if (student is null)
            return null;

        var reviewEntity = new ReviewEntity
        {
            Id = Guid.NewGuid(),
            Description = review.Description,
            Rating = review.Rating,
            Tutor = tutor,
            Student = student,
            UpdatedAt = DateTimeOffset.Now.ToUniversalTime()
        };
        
        var reviewEntry = await context.Reviews.AddAsync(reviewEntity);
        tutor.Rating = tutor.Reviews.Concat(new[] { reviewEntity }).Average(x => x.Rating);
        await context.SaveChangesAsync();

        return mapper.Map<Review>(reviewEntry.Entity);
    }

    public Task<Review> Delete(Review review)
    {
        throw new NotImplementedException();
    }
}