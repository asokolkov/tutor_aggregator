using EFCore.Postgres.Identity.Models;

namespace SPA.Domain;

public sealed record User(Guid Id, string FirstName, string LastName, Uri Avatar, AccountType? AccountType, bool RegistrationCompleted);