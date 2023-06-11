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
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> GetCurrentUserAsync()
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        
        var query = new GetUserQuery(userId.Value);
        var model = await mediator.Send(query);
        
        return model is not null ? Ok(mapper.Map<V1UserDto>(model)) : NotFound();
    }
}