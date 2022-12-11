using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Queries.GetPage;

[UsedImplicitly]
public class GetPageQueryHandler<T> : IRequestHandler<GetPageQuery<T>, Page<T>> 
{
    private readonly ICrudRepository<T> tutorsRepository;

    public GetPageQueryHandler(ICrudRepository<T> tutorsRepository)
    {
        this.tutorsRepository = tutorsRepository;
    }

    public async Task<Page<T>> Handle(GetPageQuery<T> request, CancellationToken cancellationToken)
    {
        return await tutorsRepository.Get(request.PageNumber, request.PageSize);
    }
}