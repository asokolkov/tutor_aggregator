namespace SPA.Application.Users.GetCurrentUserQuery;

using Domain;
using MediatR;

public record GetUserQuery(Guid Id) : IRequest<User>;