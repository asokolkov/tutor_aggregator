using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Queries.Get;

[UsedImplicitly]
public class GetQueryHandler<T> : IRequestHandler<GetQuery<T>, T> 
{
    private readonly ICrudRepository<T> repository;

    public GetQueryHandler(ICrudRepository<T> repository)
    {
        this.repository = repository;
    }

    public async Task<T> Handle(GetQuery<T> request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}