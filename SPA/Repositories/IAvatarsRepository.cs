#nullable enable

namespace SPA.Repositories;

internal interface IAvatarsRepository
{
    Task<byte[]> Get(Guid id);
    
    // Task<Avatar?> Create(Avatar avatar);
}