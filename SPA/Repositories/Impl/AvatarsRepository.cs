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
    
    // public async Task<Avatar?> Create(Avatar avatar)
    // {
    //     var entity = await table.FindAsync(avatar.Id);
    //     var avatarEntity = mapper.Map<AvatarEntity>(avatar);
    //     
    //     await using var transaction = await context.Database.BeginTransactionAsync();
    //     await transaction.CreateSavepointAsync("BeforeUpdate");
    //     try
    //     {
    //         var entityEntry = entity is null
    //             ? await table.AddAsync(avatarEntity)
    //             : table.Update(avatarEntity);
    //         await context.SaveChangesAsync();
    //         await transaction.CommitAsync();
    //         return mapper.Map<Avatar>(entityEntry.Entity);
    //     }
    //     catch (Exception)
    //     {
    //         await transaction.RollbackToSavepointAsync("BeforeUpdate");
    //         return default;
    //     }
    // }
}