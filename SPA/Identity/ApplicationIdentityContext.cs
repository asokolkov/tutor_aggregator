using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SPA.Identity.Models;

namespace SPA.Identity;

using Microsoft.AspNetCore.Identity;

public class ApplicationIdentityContext : IdentityDbContext<ApplicationUser, IdentityRole<Guid>, Guid>
{
    public ApplicationIdentityContext(DbContextOptions<ApplicationIdentityContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
}