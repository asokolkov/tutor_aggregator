using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SPA.Application.Locations.Queries.GetLocationQuery;
using SPA.Application.Locations.Queries.GetLocationsQuery;
using SPA.V1.DataModels;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

[ApiController]
[Route("api/v1/locations")]
public sealed class V1LocationsController : Controller
{
    private readonly IMapper mapper;
    private readonly IMediator mediator;

    public V1LocationsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1LocationDto>))]
    public async Task<IActionResult> Get()
    {
        var query = new GetLocationsQuery();
        var models = await mediator.Send(query);
        return Ok(mapper.Map<List<V1LocationDto>>(models));
    }

    [HttpGet("{id:guid}")]
    [SwaggerResponse(200, "OK", typeof(V1LocationDto))]
    public async Task<IActionResult> Get(Guid id)
    {
        var query = new GetLocationQuery(id);
        var model = await mediator.Send(query);
        return Ok(mapper.Map<V1LocationDto>(model));
    }
}