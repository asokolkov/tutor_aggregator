namespace SPA.Application.Account.Commands.LoginCommand;

#nullable enable

using Domain;
using EFCore.Postgres.Identity.Models;
using JetBrains.Annotations;
using MediatR;
using Microsoft.AspNetCore.Identity;

[UsedImplicitly]
internal sealed class LoginCommandHandler : IRequestHandler<LoginCommand, User?>
{
    private readonly UserManager<ApplicationUser> userManager;
    private readonly SignInManager<ApplicationUser> signInManager;

    public LoginCommandHandler(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
    {
        this.userManager = userManager;
        this.signInManager = signInManager;
    }

  
    public async Task<User?> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        var signInResult = await signInManager.PasswordSignInAsync(request.Email, request.Password,
            request.RememberMe, false);

        if (!signInResult.Succeeded)
            return null;
        
        var user = await userManager.FindByEmailAsync(request.Email);

        var userModel = new User(user.Id, user.FirstName, user.LastName, user.PhoneNumber, user.Email, null,
            user.AccountType, user.RegistrationCompleted);

        return userModel;
    }
}