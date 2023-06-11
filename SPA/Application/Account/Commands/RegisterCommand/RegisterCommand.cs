#nullable enable
namespace SPA.Application.Account.Commands.RegisterCommand;

using Domain;
using EFCore.Postgres.Identity.Models;
using MediatR;

internal sealed record RegisterCommand(
    string Email,
    string Password,
    string FirstName,
    string LastName,
    string PhoneNumber,
    AccountType AccountType) : IRequest<User?>;