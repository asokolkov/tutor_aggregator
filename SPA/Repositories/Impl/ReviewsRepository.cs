#nullable enable
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SPA.Data;
using SPA.Domain;
using SPA.Entities;

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
        var tutor = await context.Tutors
            .Include(x => x.Reviews)
            .FirstOrDefaultAsync(x => x.Id == tutorId);

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
        
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            await context.Reviews.AddAsync(reviewEntity);
            await context.SaveChangesAsync();
            tutor.Rating = tutor.Reviews.Average(x => x.Rating);
            await transaction.CommitAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }

        return mapper.Map<Review>(reviewEntity);
    }

    public Task<Review> Delete(Review review)
    {
        throw new NotImplementedException();
    }
}