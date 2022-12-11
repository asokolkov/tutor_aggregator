using JetBrains.Annotations;
using MediatR;
using SPA.Application.Students.Queries.GetStudent;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Lessons.Queries.GetLesson;

[UsedImplicitly]
public class GetLessonHandler : IRequestHandler<GetLesson, Lesson> 
{
    private readonly ICrudRepository<Lesson> repository;
    
    public GetLessonHandler(ICrudRepository<Lesson> repository)
    {
        this.repository = repository;
    }

    public async Task<Lesson> Handle(GetLesson request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}