using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace SPA.V1.Controllers;

using Application.Account.Commands.LoginCommand;
using Application.Account.Commands.RegisterCommand;
using AutoMapper;
using DataModels;
using EFCore.Postgres.Identity.Models;
using MediatR;
using Services;
using Swashbuckle.AspNetCore.Annotations;

[ApiController]
[Route("account")]
[Produces("application/json")]
public class V1AccountController : ControllerBase
{
    private readonly IMapper mapper;
    private readonly SignInManager<ApplicationUser> signInManager;
    private readonly IMediator mediator;

    public V1AccountController(SignInManager<ApplicationUser> signInManager, IMapper mapper, IMediator mediator)
    {
        this.signInManager = signInManager;
        this.mapper = mapper;
        this.mediator = mediator;
    }

    [AllowAnonymous]
    [HttpPost("signin")]
    [SwaggerResponse(200, "OK", typeof(V1UserDto))]
    public async Task<IActionResult> LoginAsync([FromBody] V1LoginDto loginDto)
    {
        var loginCommand = new LoginCommand(loginDto.Email, loginDto.Password, loginDto.RememberMe);
        var userModel = await mediator.Send(loginCommand);

        if (userModel == null)
            return Unauthorized();

        return Ok(mapper.Map<V1UserDto>(userModel));
    }

    [AllowAnonymous]
    [HttpPost("signup")]
    [SwaggerResponse(200, "OK", typeof(V1UserDto))]
    public async Task<IActionResult> RegisterAsync([FromBody] V1RegisterDto registerDto)
    {
        var accountType = mapper.Map<AccountType>(registerDto.AccountType);

        var registerCommand = new RegisterCommand(registerDto.Email, registerDto.Password, registerDto.FirstName,
            registerDto.LastName, registerDto.Phone, accountType);
        var userModel = await mediator.Send(registerCommand);

        return Ok(mapper.Map<V1UserDto>(userModel));
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