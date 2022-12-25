using SPA.Application.Reviews.Queries.GetReview;
using SPA.Application.Reviews.Queries.GetReviews;
using SPA.Application.Reviews.Queries.UpdateReview;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/v1/reviews")]
public sealed class V1ReviewsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1ReviewsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1ReviewDto>))]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var query = new GetReviews(page, size);
        var modelsPage = await mediator.Send(query);
        return Ok(mapper.Map<V1PageDto<V1ReviewDto>>(modelsPage));
    }
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1ReviewDto))]
    public async Task<IActionResult> Get(int id)
    {
        var query = new GetReview(id);
        var model = await mediator.Send(query);
        return Ok(mapper.Map<V1ReviewDto>(model));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateReview))]
    public async Task<IActionResult> Update([FromBody] V1ReviewDto old)
    {
        var query = new UpdateReview(old);
        return Ok(await mediator.Send(query));
    }
}