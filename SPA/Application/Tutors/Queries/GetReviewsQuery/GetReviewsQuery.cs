using MediatR;
using SPA.Domain;

namespace SPA.Application.Tutors.Queries.GetReviewsQuery;

internal record GetReviewsQuery(Guid TutorId, int PageNumber, int PageSize) : IRequest<Page<Review>>;