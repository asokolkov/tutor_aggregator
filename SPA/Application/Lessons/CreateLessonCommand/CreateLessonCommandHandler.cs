using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Lessons.CreateLessonCommand;

[UsedImplicitly]
internal sealed class CreateLessonCommandHandler : IRequestHandler<CreateLessonCommand, Lesson>
{
    private readonly ILessonRepository repository;

    public CreateLessonCommandHandler(ILessonRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Lesson> Handle(CreateLessonCommand request, CancellationToken cancellationToken)
    {
        var lesson = new Lesson
        {
            Id = Guid.NewGuid(),
            Price = request.Price,
            Status = LessonStatus.Scheduled,
            Type = request.Type,
            Start = request.Start,
            End = request.End
        };

        return await repository.InsertAsync(request.TutorId, lesson);
    }
}