using MediatR;

namespace SPA.Application.Avatars.Commands.CreateAvatarCommand;

internal record CreateAvatarCommand(Guid Id, byte[] Image) : IRequest<byte[]>;