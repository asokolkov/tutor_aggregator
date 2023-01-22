using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Avatars.Commands.CreateAvatarCommand;

[UsedImplicitly]
internal class CreateAvatarCommandHandler : IRequestHandler<CreateAvatarCommand, byte[]> 
{
    private readonly IAvatarsRepository repository;
    
    public CreateAvatarCommandHandler(IAvatarsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<byte[]> Handle(CreateAvatarCommand request, CancellationToken cancellationToken)
    {
        return await repository.Create(request.Id, request.Image);
    }
}