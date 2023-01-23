using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Avatars.Queries.GetAvatarQuery;

[UsedImplicitly]
internal class GetAvatarQueryHandler : IRequestHandler<GetAvatarQuery, byte[]> 
{
    private readonly IAvatarsRepository repository;
    
    public GetAvatarQueryHandler(IAvatarsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<byte[]> Handle(GetAvatarQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}