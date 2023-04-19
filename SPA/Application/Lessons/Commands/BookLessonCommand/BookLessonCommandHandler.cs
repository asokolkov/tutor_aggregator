#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Services;

namespace SPA.Application.Lessons.Commands.BookLessonCommand;

[UsedImplicitly]
internal sealed class BookLessonCommandHandler : IRequestHandler<BookLessonCommand, Lesson?>
{
    private readonly ILessonsManager lessonsManager;

    public BookLessonCommandHandler(ILessonsManager lessonsManager)
    {
        this.lessonsManager = lessonsManager;
    }

    public async Task<Lesson?> Handle(BookLessonCommand request, CancellationToken cancellationToken)
    {
        return await lessonsManager.BookAsync(request.StudentId, request.LessonId);
    }
}