using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Queries.GetPage;

[UsedImplicitly]
public class GetPageQueryHandler<T> : IRequestHandler<GetPageQuery<T>, Page<T>> 
{
    private readonly ICrudRepository<T> repository;

    public GetPageQueryHandler(ICrudRepository<T> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<T>> Handle(GetPageQuery<T> request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}