namespace EFCore.Postgres.Identity.Models;

#nullable enable
using Microsoft.AspNetCore.Identity;

public class ApplicationUser : IdentityUser<Guid>
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public Uri? Avatar { get; set; }
    public AccountType? AccountType { get; set; }
    public bool RegistrationCompleted { get; set; }
}