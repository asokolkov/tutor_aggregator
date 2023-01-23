namespace SPA.Repositories.Impl;

using Domain;
using Identity.Models;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

#nullable enable

[UsedImplicitly]
internal sealed class UserRepository : IUserRepository
{
    private readonly UserManager<ApplicationUser> userManager;

    public UserRepository(UserManager<ApplicationUser> userManager)
    {
        this.userManager = userManager;
    }

    public async Task<User?> GetAsync(Guid id)
    {
        var user = await userManager.Users.FirstOrDefaultAsync(user => user.Id == id);
        if (user is null)
            return null;
        return new User(user.Id, user.FirstName, user.LastName, user.Avatar, user.AccountType, user.RegistrationCompleted);
    }

    public async Task<User?> UpdateAsync(ApplicationUser user)
    {
        var result = await userManager.UpdateAsync(user);
        if (!result.Succeeded)
            return null;
        return new User(user.Id, user.FirstName, user.LastName, user.Avatar, user.AccountType, user.RegistrationCompleted);
    }
}