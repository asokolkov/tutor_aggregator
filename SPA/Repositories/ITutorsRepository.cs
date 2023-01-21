﻿namespace SPA.Repositories;

using Domain;
using Entities;

#nullable enable

internal interface ITutorsRepository
{
    Task<Page<Tutor>> Get(int page, int size, string subject, string city, string district, int maxPrice, int rating);
    
    Task<Tutor?> Get(Guid id);

    Task<Tutor?> Update(Tutor tutor);
    
    Task<Tutor?> Insert(Tutor tutor);

    Task<Page<Review>> GetTutorReviews(Guid tutorId, int page, int size);
}