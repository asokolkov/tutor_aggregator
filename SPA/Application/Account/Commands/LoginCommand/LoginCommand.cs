#nullable enable
namespace SPA.Application.Account.Commands.LoginCommand;

using Domain;
using MediatR;

internal sealed record LoginCommand(string Email, string Password, bool RememberMe) : IRequest<User?>;