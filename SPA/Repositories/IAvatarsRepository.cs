#nullable enable

using SPA.Domain;

namespace SPA.Repositories;

public interface IAvatarsRepository
{
    Task<byte[]> GetAsync(Guid id);
    Task<byte[]> InsertAsync(Avatar avatar);
}