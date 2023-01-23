using MediatR;
using SPA.Domain;

namespace SPA.Application.Users.Queries.GetCurrentUserQuery;

public record GetUserQuery(Guid Id) : IRequest<User>;