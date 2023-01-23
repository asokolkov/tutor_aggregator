using SPA.Application.Users.Queries.GetCurrentUserQuery;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using Extensions;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Authorize]
[Route("api/v1/users")]
public sealed class V1UserController : ControllerBase
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1UserController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet("current")]
    [SwaggerResponse(200, "OK", typeof(V1UserDto))]
    [SwaggerResponse(401, "Unauthorized")]
    public async Task<IActionResult> GetCurrentUserAsync()
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        var getUserQuery = new GetUserQuery(userId.Value);
        var user = await mediator.Send(getUserQuery);
        if (user is null)
            return NotFound();
        return Ok(mapper.Map<V1UserDto>(user));
    }
}