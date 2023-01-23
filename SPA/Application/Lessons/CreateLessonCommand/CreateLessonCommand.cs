using MediatR;
using SPA.Domain;

namespace SPA.Application.Lessons.CreateLessonCommand;

internal sealed record CreateLessonCommand(Guid TutorId, DateTimeOffset Start, DateTimeOffset End, double Price)
    : IRequest<Lesson>;