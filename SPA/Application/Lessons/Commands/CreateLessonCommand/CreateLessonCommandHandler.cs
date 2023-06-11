#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Services;

namespace SPA.Application.Lessons.Commands.CreateLessonCommand;

using Exceptions;
using Repositories;

[UsedImplicitly]
internal sealed class
    CreateLessonCommandHandler : IRequestHandler<CreateLessonCommand, Lesson?>
{
    private readonly ILessonsManager lessonsManager;
    private readonly ILessonsRepository lessonsRepository;

    public CreateLessonCommandHandler(ILessonsManager lessonsManager, ILessonsRepository lessonsRepository)
    {
        this.lessonsManager = lessonsManager;
        this.lessonsRepository = lessonsRepository;
    }

    public async Task<Lesson?> Handle(CreateLessonCommand request, CancellationToken cancellationToken)
    {
        var lessons =
            await lessonsRepository.GetTutorLessonsAsync(request.TutorId, request.Start.AddDays(-1),
                request.End.AddDays(1));
        if (lessons.Any(lesson => request.Start < lesson.End && request.End > lesson.Start))
        {
            throw new ConflictException("Lesson intersects with other lessons");
        }

        return await lessonsManager.CreateAsync(request.TutorId, request.Price, request.Type, request.Start,
            request.End);
    }
}