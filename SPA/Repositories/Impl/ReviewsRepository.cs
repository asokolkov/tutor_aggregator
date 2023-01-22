#nullable enable
using AutoMapper;
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

        var reviewEntity = new ReviewEntity
        {
            Id = new Guid(),
            Description = review.Description,
            Rating = review.Rating,
            TutorId = tutorId,
            StudentId = studentId,
            StudentFirstName = student.FirstName,
            StudentAvatar = student.Avatar,
            UpdatedAt = DateTimeOffset.Now
        };
        
        await using var reviewTransaction = await context.Database.BeginTransactionAsync();
        await reviewTransaction.CreateSavepointAsync("BeforeReviewInsert");
        try
        {
            await context.Reviews.AddAsync(reviewEntity);
            await context.SaveChangesAsync();
            await reviewTransaction.CommitAsync();
        }
        catch (Exception)
        {
            await reviewTransaction.RollbackToSavepointAsync("BeforeReviewInsert");
            return default;
        }

        await using var tutorTransaction = await context.Database.BeginTransactionAsync();
        await tutorTransaction.CreateSavepointAsync("BeforeTutorUpdate");
        try
        {
            tutor.Rating = tutor.Reviews.Average(x => x.Rating);
            await context.SaveChangesAsync();
            await tutorTransaction.CommitAsync();
        }
        catch (Exception)
        {
            await tutorTransaction.RollbackToSavepointAsync("BeforeTutorUpdate");
            return default;
        }
        
        return mapper.Map<Review>(reviewEntity); 
    }

    public Task<Review> Delete(Review review)
    {
        throw new NotImplementedException();
    }
}