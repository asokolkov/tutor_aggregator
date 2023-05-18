using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using SPA.Domain;

namespace SPA.Repositories.Impl;

internal sealed class AvatarsRepository : IAvatarsRepository
{
    private readonly ApplicationContext context;
    private readonly IMapper mapper;

    public AvatarsRepository(ApplicationContext context, IMapper mapper)
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
        var t = mapper.Map<AvatarEntity>(avatar);
        await context.Avatars.AddAsync(t);
        await context.SaveChangesAsync();
        return avatar.Image;
    }
}