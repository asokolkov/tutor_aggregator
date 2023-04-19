#nullable enable

using MediatR;
using SPA.Domain;

namespace SPA.Application.Lessons.Commands.CreateLessonCommand;

internal sealed record CreateLessonCommand(Guid TutorId, DateTimeOffset Start, DateTimeOffset End, int Price, LessonType Type) : IRequest<Lesson?>;