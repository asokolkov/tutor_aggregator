#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Services;

namespace SPA.Application.Lessons.Commands.CreateLessonCommand;

[UsedImplicitly]
internal sealed class
    CreateLessonCommandHandler : IRequestHandler<CreateLessonCommand, Lesson?>
{
    private readonly ILessonsManager lessonsManager;

    public CreateLessonCommandHandler(ILessonsManager lessonsManager)
    {
        this.lessonsManager = lessonsManager;
    }

    public async Task<Lesson?> Handle(CreateLessonCommand request, CancellationToken cancellationToken)
    {
        return await lessonsManager.CreateAsync(request.TutorId, request.Price, request.Type, request.Start, request.End);
    }
}