using JetBrains.Annotations;
using MediatR;
using SPA.Application.Queries.Get;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Queries.GetAll;

[UsedImplicitly]
public class GetAllQueryHandler<T> : IRequestHandler<GetAllQuery<T>, Page<T>> 
{
    private readonly ICrudRepository<T> repository;

    public GetAllQueryHandler(ICrudRepository<T> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<T>> Handle(GetAllQuery<T> request, CancellationToken cancellationToken)
    {
        return await repository.Get();
    }
}