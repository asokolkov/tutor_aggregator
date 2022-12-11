using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Lessons.Queries.UpdateLesson;

[UsedImplicitly]
public class UpdateLessonHandler : IRequestHandler<UpdateLesson, Lesson> 
{
    private readonly ICrudRepository<Lesson> repository;
    
    public UpdateLessonHandler(ICrudRepository<Lesson> repository)
    {
        this.repository = repository;
    }

    public async Task<Lesson> Handle(UpdateLesson request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}