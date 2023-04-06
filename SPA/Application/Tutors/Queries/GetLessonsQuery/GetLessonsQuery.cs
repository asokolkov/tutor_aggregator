using MediatR;
using SPA.Domain;

namespace SPA.Application.Tutors.Queries.GetLessonsQuery;

internal sealed record GetTutorLessonsQuery(Guid TutorId, DateTimeOffset Start, DateTimeOffset End) : IRequest<ICollection<Lesson>>;