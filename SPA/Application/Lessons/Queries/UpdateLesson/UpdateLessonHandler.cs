using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;
using SPA.V1.DataModels;

namespace SPA.Application.Lessons.Queries.UpdateLesson;

[UsedImplicitly]
public class UpdateLessonHandler : IRequestHandler<UpdateLesson, V1LessonDto> 
{
    private readonly ICrudRepository<V1LessonDto> repository;
    
    public UpdateLessonHandler(ICrudRepository<V1LessonDto> repository)
    {
        this.repository = repository;
    }

    public async Task<V1LessonDto> Handle(UpdateLesson request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}