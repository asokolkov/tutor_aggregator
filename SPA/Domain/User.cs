namespace SPA.Domain;

using Identity.Models;

public sealed record User(string FirstName, string LastName, AccountType? AccountType, bool RegistrationCompleted);