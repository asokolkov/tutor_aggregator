namespace SPA.V1.Controllers;

using System.Security.Claims;
using Application.Users.GetCurrentUserQuery;
using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Authorize]
[Route("api/v1/users")]
internal sealed class V1UserController : ControllerBase
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;
    
    public V1UserController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }
    
    [HttpGet("current")]
    public async Task<IActionResult> GetCurrentUserAsync()
    {
        var userId = User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.NameIdentifier)?.Value;
        if (!Guid.TryParse(userId, out var id))
            return Unauthorized();
        var getUserQuery = new GetUserQuery(id);
        var user = await mediator.Send(getUserQuery);
        if (user is null)
            return NotFound();
        return Ok(mapper.Map<V1UserDto>(user));
    }
}