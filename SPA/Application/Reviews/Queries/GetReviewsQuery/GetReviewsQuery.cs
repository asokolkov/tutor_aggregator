using MediatR;
using SPA.Models;

namespace SPA.Application.Reviews.Queries.GetReviewsQuery;

internal record GetReviewsQuery(long PageNumber, long PageSize) : IRequest<Page<Review>>;
