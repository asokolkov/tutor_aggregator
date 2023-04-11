#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Services;

namespace SPA.Application.Lessons.Commands.DeleteLessonCommand;

[UsedImplicitly]
internal sealed class DeleteLessonCommandHandler : IRequestHandler<DeleteLessonCommand, Lesson?>
{
    private readonly ILessonsManager lessonsManager;

    public DeleteLessonCommandHandler(ILessonsManager lessonsManager)
    {
        this.lessonsManager = lessonsManager;
    }

    public async Task<Lesson?> Handle(DeleteLessonCommand request, CancellationToken cancellationToken)
    {
        return await lessonsManager.DeleteAsync(request.Id);
    }
}