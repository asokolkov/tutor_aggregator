#nullable enable
using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Locations.Commands.UpdateLocationCommand;

using Domain;
using Entities;

[UsedImplicitly]
internal class UpdateLocationCommandHandler : IRequestHandler<UpdateLocationCommand, Location?> 
{
    private readonly ILocationsRepository repository;
    
    public UpdateLocationCommandHandler(ILocationsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Location?> Handle(UpdateLocationCommand request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}