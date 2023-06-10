#nullable enable

using MediatR;
using SPA.Domain;

namespace SPA.Application.Tutors.Commands.CreateReviewCommand;

internal record CreateReviewCommand(Guid TutorId, Guid StudentId, Review Review) : IRequest<Review?>;
