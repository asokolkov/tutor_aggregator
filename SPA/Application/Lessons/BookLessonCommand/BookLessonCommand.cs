#nullable enable

using MediatR;
using SPA.Domain;

namespace SPA.Application.Lessons.PickLessonCommand;

internal sealed record BookLessonCommand(Guid StudentId, Guid LessonId) : IRequest<Lesson?>;