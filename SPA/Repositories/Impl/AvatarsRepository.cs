using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using SPA.Domain;

namespace SPA.Repositories.Impl;

internal sealed class AvatarsRepository : IAvatarsRepository
{
    private readonly IApplicationContext context;
    private readonly IMapper mapper;

    public AvatarsRepository(IApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<byte[]> GetAsync(Guid id)
    {
        var avatar = await context.Avatars.FindAsync(id);
        return avatar?.Image;
    }

    public async Task<byte[]> InsertAsync(Avatar avatar)
    {
        var avatarEntity = await context.Avatars.FindAsync(avatar.Id);
        if (avatarEntity is not null)
            context.Avatars.Remove(avatarEntity);
        
        await context.Avatars.AddAsync(mapper.Map<AvatarEntity>(avatar));
        
        await context.SaveChangesAsync();
        return avatar.Image;
    }
}