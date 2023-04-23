using EFCore.Postgres.Identity.Models;

namespace SPA.Domain;

public sealed record User(Guid Id, string FirstName, string LastName, string Phone, string Email, Uri Avatar, AccountType? AccountType, bool RegistrationCompleted);