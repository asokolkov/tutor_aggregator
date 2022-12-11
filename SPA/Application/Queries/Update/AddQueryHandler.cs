using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Queries.Update;

[UsedImplicitly]
public class UpdateQueryHandler<T> : IRequestHandler<UpdateQuery<T>, T> 
{
    private readonly ICrudRepository<T> repository;

    public UpdateQueryHandler(ICrudRepository<T> repository)
    {
        this.repository = repository;
    }

    public async Task<T> Handle(UpdateQuery<T> request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}