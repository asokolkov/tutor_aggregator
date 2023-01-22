#nullable enable

namespace SPA.Repositories;

internal interface IAvatarsRepository
{
    Task<byte[]> Get(Guid id);
    
    Task<byte[]> Create(Guid id, byte[] image);
}