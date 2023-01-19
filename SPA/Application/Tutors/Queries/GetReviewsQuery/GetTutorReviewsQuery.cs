namespace SPA.Application.Tutors.Queries.GetReviewsQuery;

using Domain;
using Entities;
using MediatR;

internal record GetTutorReviewsQuery(Guid TutorId, int PageNumber, int PageSize) : IRequest<Page<Review>>;
