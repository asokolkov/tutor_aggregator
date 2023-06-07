#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Locations.Queries.GetLocationQuery;

using Domain;

[UsedImplicitly]
internal class GetLocationQueryHandler : IRequestHandler<GetLocationQuery, Location?> 
{
    private readonly ILocationsRepository repository;
    
    public GetLocationQueryHandler(ILocationsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Location?> Handle(GetLocationQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetAsync(request.Id);
    }
}