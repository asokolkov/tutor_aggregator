#nullable enable

using MediatR;
using SPA.Domain;

namespace SPA.Application.Lessons.Commands.CancelLessonCommand;

internal sealed record CancelLessonCommand(Guid Id) : IRequest<Lesson?>;