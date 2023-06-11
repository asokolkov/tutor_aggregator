using MediatR;
using SPA.Domain;

namespace SPA.Application.Tutors.Queries.GetTutorLessonsQuery;

internal sealed record GetTutorLessonsQuery(Guid TutorId) : IRequest<ICollection<Lesson>>;
