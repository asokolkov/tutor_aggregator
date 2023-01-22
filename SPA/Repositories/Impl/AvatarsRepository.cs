using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SPA.Data;
using SPA.Entities;

namespace SPA.Repositories.Impl;

internal sealed class AvatarsRepository : IAvatarsRepository
{
    private readonly ApplicationContext context;
    private readonly DbSet<AvatarEntity> table;
    private readonly IMapper mapper;

    public AvatarsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
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