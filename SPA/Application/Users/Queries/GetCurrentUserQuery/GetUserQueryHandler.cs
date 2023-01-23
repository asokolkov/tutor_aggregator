using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Users.Queries.GetCurrentUserQuery;

#nullable enable

[UsedImplicitly]
internal sealed class GetUserQueryHandler : IRequestHandler<GetUserQuery, User?>
{
    private readonly IUserRepository userRepository;
    
    public GetUserQueryHandler(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }
    
    public async Task<User?> Handle(GetUserQuery request, CancellationToken cancellationToken)
    {
        return await userRepository.GetAsync(request.Id);
    }
}