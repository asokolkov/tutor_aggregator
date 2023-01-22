using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SPA.Application.Avatars.Queries.GetAvatarQuery;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

[ApiController]
[Route("api/v1/avatars")]
public sealed class V1AvatarsController : ControllerBase
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1AvatarsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet("{id:guid}")]
    [SwaggerResponse(200, "OK")]
    public async Task<IActionResult> Get(Guid id)
    {
        var query = new GetAvatarQuery(id);
        var image = await mediator.Send(query);
        return Ok(image);
    }
    
    // [HttpPost]
    // [SwaggerResponse(200, "OK", typeof(V1AvatarDto))]
    // [SwaggerResponse(401, "Unauthorized")]
    // [SwaggerResponse(404, "NotFound")]
    // public async Task<IActionResult> Create([FromBody] V1AvatarDto avatarDto)
    // {
    //     var userId = User.GetId();
    //     if (userId is null)
    //         return Unauthorized();
    //
    //     var avatar = mapper.Map<Avatar>(avatarDto);
    //     var query = new CreateAvatarCommand(avatar);
    //     return Ok(await mediator.Send(query));
    // }
}