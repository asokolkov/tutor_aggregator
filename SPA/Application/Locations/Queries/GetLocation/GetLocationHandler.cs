using JetBrains.Annotations;
using MediatR;
using SPA.Application.Lessons.Queries.GetLesson;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Locations.Queries.GetLocation;

[UsedImplicitly]
public class GetLocationHandler : IRequestHandler<GetLocation, Location> 
{
    private readonly ICrudRepository<Location> repository;
    
    public GetLocationHandler(ICrudRepository<Location> repository)
    {
        this.repository = repository;
    }

    public async Task<Location> Handle(GetLocation request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}