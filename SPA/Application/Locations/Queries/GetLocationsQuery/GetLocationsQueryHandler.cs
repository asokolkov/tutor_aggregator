using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Locations.Queries.GetLocationsQuery;

using Domain;

[UsedImplicitly]
internal class GetLocationsQueryHandler : IRequestHandler<GetLocationsQuery, List<Location>>
{
    private readonly ILocationsRepository repository;

    public GetLocationsQueryHandler(ILocationsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<List<Location>> Handle(GetLocationsQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetAsync();
    }
}