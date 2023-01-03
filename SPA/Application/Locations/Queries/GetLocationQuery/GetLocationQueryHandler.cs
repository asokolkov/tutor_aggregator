using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Locations.Queries.GetLocationQuery;

[UsedImplicitly]
internal class GetLocationQueryHandler : IRequestHandler<GetLocationQuery, Location> 
{
    private readonly ICrudRepository<Location> repository;
    
    public GetLocationQueryHandler(ICrudRepository<Location> repository)
    {
        this.repository = repository;
    }

    public async Task<Location> Handle(GetLocationQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}