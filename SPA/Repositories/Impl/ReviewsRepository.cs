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
        var tutor = await context.Tutors.FindAsync(tutorId);
        
        if (tutor is null)
            return null;
        
        var student = await context.Students.FindAsync(studentId);
        
        if (student is null)
            return null;
        
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            var reviewEntity = new ReviewEntity
            {
                Id = new Guid(),
                Description = review.Description,
                Rating = review.Rating,
                Student = student,
                Tutor = tutor,
                UpdatedAt = DateTimeOffset.Now
            };
            var entity = await context.Reviews.AddAsync(reviewEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Review>(entity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
    }

    public Task<Review> Delete(Review review)
    {
        throw new NotImplementedException();
    }
}