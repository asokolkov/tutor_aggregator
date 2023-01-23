#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Lessons.PickLessonCommand;

[UsedImplicitly]
internal sealed class PickLessonCommandHandler : IRequestHandler<BookLessonCommand, Lesson?>
{
    private readonly ILessonRepository repository;

    public PickLessonCommandHandler(ILessonRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Lesson?> Handle(BookLessonCommand request, CancellationToken cancellationToken)
    {
        return await repository.BookAsync(request.StudentId, request.LessonId);
    }
}