namespace SPA.Application.Lessons.CancelLessonCommand;

using Domain;
using MediatR;

internal sealed record CancelLessonCommand(Guid LessonId) : IRequest<Lesson>;