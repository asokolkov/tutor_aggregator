using MediatR;
using SPA.Models;

namespace SPA.Application.Tutors.Commands.GetReviewsCommand;

internal record GetReviewsCommand(int Id, long PageNumber, long PageSize) : IRequest<Page<Review>>;
