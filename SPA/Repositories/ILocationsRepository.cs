#nullable enable

namespace SPA.Repositories;

using Domain;

internal interface ILocationsRepository
{
    Task<Location?> GetAsync(Guid id);
    Task<List<Location>> GetAsync();
    Task<Location?> InsertAsync(Location location);
    Task<Location?> UpdateAsync(Location location);
}