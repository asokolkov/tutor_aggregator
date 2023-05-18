using MediatR;

namespace SPA.Application.Avatars.Commands.InsertAvatarCommand;

internal record InsertAvatarCommand(Guid Id, byte[] Image) : IRequest<byte[]>;