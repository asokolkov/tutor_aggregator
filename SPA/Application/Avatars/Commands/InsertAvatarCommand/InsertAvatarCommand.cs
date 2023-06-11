using MediatR;

namespace SPA.Application.Avatars.Commands.InsertAvatarCommand;

public record InsertAvatarCommand(Guid Id, byte[] Image) : IRequest<byte[]>;