using MediatR;
using SPA.Domain;

namespace SPA.Application.Tutors.Queries.GetTutorLessonsByIdQuery;

internal sealed record GetTutorLessonsByIdQuery(Guid TutorId, DateTimeOffset DateTime) : IRequest<ICollection<Lesson>>;