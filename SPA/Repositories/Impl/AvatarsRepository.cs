using Microsoft.EntityFrameworkCore;

namespace SPA.Repositories.Impl;

using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;

internal sealed class AvatarsRepository : IAvatarsRepository
{
    private readonly ApplicationContext context;
    private readonly DbSet<AvatarEntity> table;

    public AvatarsRepository(ApplicationContext context)
    {
        this.context = context;
        table = context.Avatars;
    }
    
    public async Task<byte[]> Get(Guid id)
    {
        var entity = await table.FindAsync(id);
        return entity?.Image;
    }
    
    public async Task<byte[]> Create(Guid id, byte[] image)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeTransaction");
        try
        {
            var avatarEntity = new AvatarEntity
            {
                Id = id,
                Image = image
            };
            await table.AddAsync(avatarEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return image;
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeTransaction");
            return default;
        }
    }
}