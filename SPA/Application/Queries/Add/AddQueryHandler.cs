using JetBrains.Annotations;
using MediatR;
using SPA.Application.Queries.Get;
using SPA.Repositories;

namespace SPA.Application.Queries.Add;

[UsedImplicitly]
public class AddQueryHandler<T> : IRequestHandler<AddQuery<T>, T> 
{
    private readonly ICrudRepository<T> repository;

    public AddQueryHandler(ICrudRepository<T> repository)
    {
        this.repository = repository;
    }

    public async Task<T> Handle(AddQuery<T> request, CancellationToken cancellationToken)
    {
        return await repository.Insert(request.Element);
    }
}