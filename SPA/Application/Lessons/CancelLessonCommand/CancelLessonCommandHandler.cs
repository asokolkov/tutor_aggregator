namespace SPA.Application.Lessons.CancelLessonCommand;

using Domain;
using JetBrains.Annotations;
using MediatR;
using Repositories;

[UsedImplicitly]
internal sealed class CancelLessonCommandHandler : IRequestHandler<CancelLessonCommand, Lesson>
{
    private readonly ILessonRepository repository;

    public CancelLessonCommandHandler(ILessonRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Lesson> Handle(CancelLessonCommand request, CancellationToken cancellationToken)
    {
        return await repository.CancelAsync(request.LessonId);
    }
}