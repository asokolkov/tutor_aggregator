using MediatR;
using SPA.Domain;

namespace SPA.Application.Students.Queries.GetLessonsQuery;

internal sealed record GetStudentLessonsQuery(Guid StudentId) : IRequest<ICollection<Lesson>>;