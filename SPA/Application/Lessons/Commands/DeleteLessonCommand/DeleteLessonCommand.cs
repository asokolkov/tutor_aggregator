#nullable enable

using MediatR;
using SPA.Domain;

namespace SPA.Application.Lessons.Commands.DeleteLessonCommand;

internal sealed record DeleteLessonCommand(Guid Id) : IRequest<Lesson?>;