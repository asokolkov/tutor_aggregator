﻿namespace SPA.Repositories;

using Domain;

#nullable enable

internal interface ITutorsRepository
{
    Task<Tutor?> GetAsync(Guid id);
    Task<Page<Tutor>> GetPageAsync(int page, int size, string? subject, string? city, string? district, int? maxPrice, int? rating);
    Task<Tutor?> InsertAsync(Tutor tutor);
    Task<Tutor?> UpdateAsync(Guid id, UpdateTutor tutor);
    Task<Page<Review>> GetTutorReviewsAsync(Guid tutorId, int page, int size);
}