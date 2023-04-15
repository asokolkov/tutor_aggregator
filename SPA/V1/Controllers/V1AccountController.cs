using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SPA.Domain;

namespace SPA.V1.Controllers;

using System.Security.Claims;
using AutoMapper;
using DataModels;
using EFCore.Postgres.Identity.Models;
using Services;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("account")]
[Produces("application/json")]
public class V1AccountController : ControllerBase
{
    private readonly UserManager<ApplicationUser> userManager;
    private readonly IMapper mapper;
    private readonly SignInManager<ApplicationUser> signInManager;
    private readonly IUserService userService;

    public V1AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager,
        IMapper mapper, IUserService userService)
    {
        this.userManager = userManager;
        this.signInManager = signInManager;
        this.mapper = mapper;
        this.userService = userService;
    }

    [AllowAnonymous]
    [HttpPost("signin")]
    public async Task<IActionResult> LoginAsync([FromBody] V1LoginDto loginDto)
    {
        var signInResult = await signInManager.PasswordSignInAsync(loginDto.Email, loginDto.Password,
            loginDto.RememberMe, false);

        if (!signInResult.Succeeded)
            return Unauthorized();
        
        var user = await userManager.FindByEmailAsync(loginDto.Email);
        
        var userModel = new User(user.Id, user.FirstName, user.LastName, null,
            user.AccountType, user.RegistrationCompleted);

        return Ok(mapper.Map<V1UserDto>(userModel));
    }

    [AllowAnonymous]
    [HttpPost("signup")]
    public async Task<IActionResult> RegisterAsync([FromBody] V1RegisterDto registerDto)
    {
        var accountType = mapper.Map<AccountType>(registerDto.AccountType);
        var user = new ApplicationUser
        {
            Email = registerDto.Email,
            UserName = registerDto.Email,
            Id = Guid.NewGuid(),
            FirstName = registerDto.FirstName,
            LastName = registerDto.LastName,
            Phone = registerDto.Phone,
            AccountType = accountType
        };

        var identityResult = await userManager.CreateAsync(user, registerDto.Password);

        if (!identityResult.Succeeded)
        {
            return BadRequest(string.Join(", ", identityResult.Errors.Select(error => error.Description)));
        }

        switch (accountType)
        {
            case AccountType.Student:
                await userService.CreateStudent(user);
                break;
            case AccountType.Tutor:
                await userService.CreateTutor(user);
                break;
            default:
                throw new ArgumentOutOfRangeException(nameof(accountType));
        }

        user.RegistrationCompleted = true;
        await userManager.UpdateAsync(user);

        await signInManager.SignInAsync(user, false);

        var userModel = new User(user.Id, user.FirstName, user.LastName, null,
            user.AccountType, user.RegistrationCompleted);

        return Ok(mapper.Map<V1UserDto>(userModel));
    }

    [AllowAnonymous]
    [HttpGet("signin-external")]
    public IActionResult ExternalLoginAsync(string provider, string returnUrl)
    {
        var redirectUrl = Url.Action(nameof(ExternalLoginCallback), new { returnUrl });
        var properties = signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
        return Challenge(properties, provider);
    }

    [AllowAnonymous]
    [HttpGet("signin-external-callback")]
    public async Task<IActionResult> ExternalLoginCallback(string returnUrl)
    {
        var info = await signInManager.GetExternalLoginInfoAsync();
        if (info is null)
            return BadRequest();

        var signInResult =
            await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, false, false);
        if (signInResult.Succeeded)
        {
            return Ok();
        }

        var email = info.Principal.FindFirst(ClaimTypes.Email)?.Value;
        var user = await userManager.FindByNameAsync(email);

        if (user is null)
        {
            user = new ApplicationUser
            {
                Email = email,
                UserName = email,
                FirstName = info.Principal.FindFirst(ClaimTypes.GivenName)?.Value,
                LastName = info.Principal.FindFirst(ClaimTypes.Surname)?.Value,
                EmailConfirmed = true,
                RegistrationCompleted = false
            };
            await userManager.CreateAsync(user);
        }


        await userManager.AddLoginAsync(user, info);

        return Ok();
    }

    [AllowAnonymous]
    [HttpPost("signup-external")]
    public async Task<IActionResult> ExternalRegister([FromBody] V1ExternalRegisterDto externalRegisterDto)
    {
        var info = await signInManager.GetExternalLoginInfoAsync();
        if (info is null)
            return BadRequest();

        var signInResult =
            await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, false, false);

        if (signInResult.Succeeded)
        {
            return Ok();
        }

        return BadRequest();
    }


    [HttpGet("sign-out")]
    [Authorize]
    [SwaggerResponse(StatusCodes.Status302Found)]
    [SwaggerResponse(StatusCodes.Status401Unauthorized)]
    public async Task<ActionResult> SignOutAsync()
    {
        await signInManager.SignOutAsync();
        return SignOut();
    }
}