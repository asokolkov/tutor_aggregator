using MediatR;
using SPA.Models;

namespace SPA.Application.Reviews.Commands.UpdateReviewCommand;

internal record UpdateReviewCommand(Review Element) : IRequest<Review>;