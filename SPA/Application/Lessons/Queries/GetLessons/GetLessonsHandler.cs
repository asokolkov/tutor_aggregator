using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Lessons.Queries.GetLessons;

[UsedImplicitly]
internal sealed class GetLessonsHandler : IRequestHandler<GetLessons, Page<Lesson>>
{
    private readonly ICrudRepository<Lesson> repository;

    public GetLessonsHandler(ICrudRepository<Lesson> tutorsRepository)
    {
        this.repository = tutorsRepository;
    }

    public async Task<Page<Lesson>> Handle(GetLessons request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}