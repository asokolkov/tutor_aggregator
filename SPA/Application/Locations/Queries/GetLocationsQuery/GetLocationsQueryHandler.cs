using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Locations.Queries.GetLocationsQuery;

[UsedImplicitly]
internal class GetLocationsQueryHandler : IRequestHandler<GetLocationsQuery, Page<Location>>
{
    private readonly ICrudRepository<Location> repository;

    public GetLocationsQueryHandler(ICrudRepository<Location> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Location>> Handle(GetLocationsQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}