namespace SPA.Repositories;

using Domain;
using Entities;

internal interface ILocationRepository
{
    Task<Page<Location>> Get(int page, int size);
    
    Task<Location> Get(Guid id);

    Task<Location> Update(Location location);
    
    Task<Location> Insert(Location location);
}