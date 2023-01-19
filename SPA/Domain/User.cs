namespace SPA.Domain;

using Identity.Models;
using V1.DataModels;

public sealed record User(string FirstName, string LastName, Uri Avatar, AccountType? AccountType, bool RegistrationCompleted);