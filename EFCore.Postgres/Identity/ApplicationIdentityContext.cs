namespace EFCore.Postgres.Identity;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Models;
using SPA.Identity.Models;

public class ApplicationIdentityContext : IdentityDbContext<ApplicationUser, IdentityRole<Guid>, Guid>
{
    public ApplicationIdentityContext(DbContextOptions<ApplicationIdentityContext> options) : base(options)
    {
    }
}