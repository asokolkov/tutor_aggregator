using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SPA.Application.Avatars.Commands.InsertAvatarCommand;
using SPA.Application.Avatars.Queries.GetAvatarQuery;
using SPA.Extensions;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using DataModels;

[ApiController]
[Route("api/v1/avatars")]
public sealed class V1AvatarsController : ControllerBase
{
    private readonly IMediator mediator;

    public V1AvatarsController(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpGet("{id:guid}")]
    [SwaggerResponse(404, "NotFound")]
    [SwaggerResponse(200, "OK")]
    public async Task<IActionResult> Get(Guid id)
    {
        var query = new GetAvatarQuery(id);
        var image = await mediator.Send(query);
        
        return image is null ? NotFound(id) : File(image, "image/jpeg");
    }

    [HttpPost]
    [RequestSizeLimit(4 * 1024 * 1024)]
    [SwaggerResponse(401, "Unauthorized")]
    [SwaggerResponse(200, "OK")]
    public async Task<IActionResult> Create([FromForm] V1CreateAvatarDto createAvatarDto)
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();  

        using var stream = new MemoryStream();
        await createAvatarDto.Avatar.CopyToAsync(stream);
        
        var query = new InsertAvatarCommand(userId.Value, stream.ToArray());
        await mediator.Send(query);
        return Ok();
    }
}