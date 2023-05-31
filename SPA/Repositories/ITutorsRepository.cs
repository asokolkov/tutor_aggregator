namespace SPA.Repositories;

using Domain;

#nullable enable

public interface ITutorsRepository
{
    Task<Page<Tutor>> GetPageAsync(int page, int size, string subject, string city, string district, int maxPrice, int rating);
    Task<Tutor?> GetAsync(Guid id);
    Task<Tutor?> Update(Guid id, UpdateTutor tutor);
    Task<Tutor?> Insert(Tutor tutor);
    Task<Page<Review>> GetTutorReviews(Guid tutorId, int page, int size);
}