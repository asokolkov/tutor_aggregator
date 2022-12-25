using SPA.Application.Locations.Queries.GetLocation;
using SPA.Application.Locations.Queries.GetLocations;
using SPA.Application.Locations.Queries.UpdateLocation;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/v1/locations")]
public sealed class V1LocationsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1LocationsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1LocationDto>))]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var query = new GetLocations(page, size);
        var modelsPage = await mediator.Send(query);
        return Ok(mapper.Map<V1PageDto<V1LocationDto>>(modelsPage));
    }
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1LocationDto))]
    public async Task<IActionResult> Get(int id)
    {
        var query = new GetLocation(id);
        var model = await mediator.Send(query);
        return Ok(mapper.Map<V1LocationDto>(model));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateLocation))]
    public async Task<IActionResult> Update([FromBody] V1LocationDto old)
    {
        var query = new UpdateLocation(old);
        return Ok(await mediator.Send(query));
    }
}