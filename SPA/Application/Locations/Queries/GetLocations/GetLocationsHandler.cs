using JetBrains.Annotations;
using MediatR;
using SPA.Application.Lessons.Queries.GetLessons;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Locations.Queries.GetLocations;

[UsedImplicitly]
internal sealed class GetLocationsHandler : IRequestHandler<GetLocations, Page<Location>>
{
    private readonly ICrudRepository<Location> repository;

    public GetLocationsHandler(ICrudRepository<Location> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Location>> Handle(GetLocations request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}