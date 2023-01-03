using MediatR;
using SPA.Models;

namespace SPA.Application.Reviews.Queries.GetReviewQuery;

internal record GetReviewQuery(int Id) : IRequest<Review>;