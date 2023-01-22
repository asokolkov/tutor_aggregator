using MediatR;

namespace SPA.Application.Avatars.Queries.GetAvatarQuery;

internal record GetAvatarQuery(Guid Id) : IRequest<byte[]>;