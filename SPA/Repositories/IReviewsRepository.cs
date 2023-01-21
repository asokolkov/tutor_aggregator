using SPA.Domain;

namespace SPA.Repositories;

internal interface IReviewsRepository
{
    Task<Review> Delete(Review review);
    Task<Review> Insert(Guid tutorId, Guid studentId, Review review);
}