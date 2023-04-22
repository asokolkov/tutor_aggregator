namespace SPA.Repositories;

using Domain;

internal interface ILocationsRepository
{
    Task<List<Location>> GetAsync();
    
    Task<Location> Get(Guid id);

    Task<Location> Update(Location location);
    
    Task<Location> Insert(Location location);
}