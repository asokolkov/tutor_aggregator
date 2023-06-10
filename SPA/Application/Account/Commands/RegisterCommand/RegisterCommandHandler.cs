#nullable enable
namespace SPA.Application.Account.Commands.RegisterCommand;

using Domain;
using EFCore.Postgres.Identity.Models;
using Exceptions;
using JetBrains.Annotations;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Services;

[UsedImplicitly]
internal sealed class RegisterCommandHandler : IRequestHandler<RegisterCommand, User?>
{
    private readonly UserManager<ApplicationUser> userManager;
    private readonly SignInManager<ApplicationUser> signInManager;
    private readonly IUserService userService;

    public RegisterCommandHandler(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, 
        IUserService userService)
    {
        this.userManager = userManager;
        this.signInManager = signInManager;
        this.userService = userService;
    }

    public async Task<User?> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var user = new ApplicationUser
        {
            Email = request.Email,
            UserName = request.Email,
            Id = Guid.NewGuid(),
            FirstName = request.FirstName,
            LastName = request.LastName,
            PhoneNumber = request.PhoneNumber,
            AccountType = request.AccountType
        };
        
        var identityResult = await userManager.CreateAsync(user, request.Password);

        if (!identityResult.Succeeded)
        {
            throw new BadRequestException(string.Join(", ", identityResult.Errors.Select(error => error.Description)));
        }

        switch (request.AccountType)
        {
            case AccountType.Student:
                await userService.CreateStudent(user);
                break;
            case AccountType.Tutor:
                await userService.CreateTutor(user);
                break;
            default:
                throw new ArgumentOutOfRangeException(nameof(request.AccountType));
        }

        user.RegistrationCompleted = true;
        await userManager.UpdateAsync(user);

        await signInManager.SignInAsync(user, false);

        var userModel = new User(user.Id, user.FirstName, user.LastName, user.PhoneNumber, user.Email, null,
            user.AccountType, user.RegistrationCompleted);

        return userModel;
    }
}