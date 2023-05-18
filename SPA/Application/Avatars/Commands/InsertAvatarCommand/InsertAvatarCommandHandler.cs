using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Avatars.Commands.InsertAvatarCommand;

[UsedImplicitly]
internal class InsertAvatarCommandHandler : IRequestHandler<InsertAvatarCommand, byte[]> 
{
    private readonly IAvatarsRepository repository;
    
    public InsertAvatarCommandHandler(IAvatarsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<byte[]> Handle(InsertAvatarCommand request, CancellationToken cancellationToken)
    {
        var avatar = new Avatar
        {
            Id = request.Id,
            Image = request.Image
        };
        return await repository.InsertAsync(avatar);
    }
}