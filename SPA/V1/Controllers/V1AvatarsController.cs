using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SPA.Application.Avatars.Commands.CreateAvatarCommand;
using SPA.Application.Avatars.Queries.GetAvatarQuery;
using SPA.Domain;
using SPA.Extensions;
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
        
        HttpContext.Response.ContentType = "image/png";
        
        return image is null ? NotFound(id) : Ok(image);
    }
    
    [HttpPost]
    [RequestSizeLimit(4 * 1024 * 1024)]
    [SwaggerResponse(401, "Unauthorized")]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> Create([FromBody] byte[] image)
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        
        var query = new CreateAvatarCommand(userId.Value, image);
        
        HttpContext.Response.ContentType = "image/png";
        
        return Ok(await mediator.Send(query));
    }
}