using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Queries.Get;

[UsedImplicitly]
public class GetQueryHandler<T> : IRequestHandler<GetQuery<T>, T> 
{
    private readonly ICrudRepository<T> tutorsRepository;

    public GetQueryHandler(ICrudRepository<T> tutorsRepository)
    {
        this.tutorsRepository = tutorsRepository;
    }

    public async Task<T> Handle(GetQuery<T> request, CancellationToken cancellationToken)
    {
        return await tutorsRepository.Get(request.Id);
    }
}