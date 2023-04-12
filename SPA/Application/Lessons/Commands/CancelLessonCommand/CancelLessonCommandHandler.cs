#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Services;

namespace SPA.Application.Lessons.Commands.CancelLessonCommand;

[UsedImplicitly]
internal sealed class CancelLessonCommandHandler : IRequestHandler<CancelLessonCommand, Lesson?>
{
    private readonly ILessonsManager lessonsManager;

    public CancelLessonCommandHandler(ILessonsManager lessonsManager)
    {
        this.lessonsManager = lessonsManager;
    }

    public async Task<Lesson?> Handle(CancelLessonCommand request, CancellationToken cancellationToken)
    {
        return await lessonsManager.CancelAsync(request.Id);
    }
}