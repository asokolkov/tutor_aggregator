#nullable enable
using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Locations.Queries.GetLocationsQuery;

using Domain;
using Entities;

[UsedImplicitly]
internal class GetLocationsQueryHandler : IRequestHandler<GetLocationsQuery, Page<Location?>>
{
    private readonly ILocationRepository repository;

    public GetLocationsQueryHandler(ILocationRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Location?>> Handle(GetLocationsQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}