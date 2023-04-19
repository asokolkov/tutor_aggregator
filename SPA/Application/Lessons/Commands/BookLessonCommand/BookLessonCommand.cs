#nullable enable

using MediatR;
using SPA.Domain;

namespace SPA.Application.Lessons.Commands.BookLessonCommand;

internal sealed record BookLessonCommand(Guid StudentId, Guid LessonId) : IRequest<Lesson?>;