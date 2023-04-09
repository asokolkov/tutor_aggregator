using MediatR;
using SPA.Domain;

namespace SPA.Application.Tutors.Queries.GetLessonsQuery;

internal sealed record GetTutorLessonsQuery(Guid TutorId, DateTimeOffset Date) : IRequest<ICollection<Lesson>>;