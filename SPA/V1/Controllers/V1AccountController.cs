using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SPA.Identity.Models;

namespace SPA.V1.Controllers;

using System.Security.Claims;
using AutoMapper;
using DataModels;

[ApiController]
[Route("account")]
[Produces("application/json")]
public class V1AccountController : ControllerBase
{
    private readonly UserManager<ApplicationUser> userManager;
    private readonly IMapper mapper;
    private readonly SignInManager<ApplicationUser> signInManager;

    public V1AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager,
        IMapper mapper)
    {
        this.userManager = userManager;
        this.signInManager = signInManager;
        this.mapper = mapper;
    }

    [AllowAnonymous]
    [HttpPost("signin")]
    public async Task<IActionResult> LoginAsync([FromBody] V1LoginDto loginDto)
    {
        var signInResult = await signInManager.PasswordSignInAsync(loginDto.Email, loginDto.Password,
            loginDto.RememberMe, false);

        if (signInResult.Succeeded)
        {
            return Ok();
        }

        return Unauthorized();
    }

    [AllowAnonymous]
    [HttpPost("signup")]
    public async Task<IActionResult> RegisterAsync([FromBody] V1RegisterDto registerDto)
    {
        var user = new ApplicationUser
        {
            Email = registerDto.Email,
            UserName = registerDto.Email,
            Id = Guid.NewGuid(),
            FirstName = registerDto.FirstName,
            LastName = registerDto.LastName,
            Phone = registerDto.Phone,
            AccountType = mapper.Map<AccountType>(registerDto.AccountType)
        };

        var identityResult = await userManager.CreateAsync(user, registerDto.Password);

        if (identityResult.Succeeded)
        {
            await signInManager.SignInAsync(user, false);
            return Ok();
        }

        return BadRequest(string.Join(", ", identityResult.Errors.Select(error => error.Description)));
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
    [Route("signin-external-callback")]
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
}