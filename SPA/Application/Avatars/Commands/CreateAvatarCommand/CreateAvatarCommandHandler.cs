// using System.Reflection.Metadata;
// using JetBrains.Annotations;
// using MediatR;
// using SPA.Domain;
// using SPA.Repositories;
//
// namespace SPA.Application.Avatars.Commands.CreateAvatarCommand;
//
// [UsedImplicitly]
// internal class CreateAvatarCommandHandler : IRequestHandler<CreateAvatarCommand, Avatar> 
// {
//     private readonly IAvatarsRepository repository;
//     
//     public CreateAvatarCommandHandler(IAvatarsRepository repository)
//     {
//         this.repository = repository;
//     }
//
//     public async Task<Avatar> Handle(CreateAvatarCommand request, CancellationToken cancellationToken)
//     {
//         return await repository.Create(request.Avatar);
//     }
// }