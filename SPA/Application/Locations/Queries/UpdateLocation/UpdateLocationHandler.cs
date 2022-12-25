using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;
using SPA.V1.DataModels;

namespace SPA.Application.Locations.Queries.UpdateLocation;

[UsedImplicitly]
public class UpdateLocationHandler : IRequestHandler<UpdateLocation, V1LocationDto> 
{
    private readonly ICrudRepository<V1LocationDto> repository;
    
    public UpdateLocationHandler(ICrudRepository<V1LocationDto> repository)
    {
        this.repository = repository;
    }

    public async Task<V1LocationDto> Handle(UpdateLocation request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}