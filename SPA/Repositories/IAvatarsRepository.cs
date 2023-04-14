#nullable enable

using SPA.Domain;

namespace SPA.Repositories;

internal interface IAvatarsRepository
{
    Task<byte[]> GetAsync(Guid id);
    Task<byte[]> InsertAsync(Avatar avatar);
}