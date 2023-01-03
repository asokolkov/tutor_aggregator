using SPA.Application.Reviews.Commands.UpdateReviewCommand;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Models;
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

    // [HttpGet]
    // [SwaggerResponse(200, "OK", typeof(V1PageDto<V1ReviewDto>))]
    // public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    // {
    //     if (page < 0)
    //         return BadRequest("Page must not be less than 0");
    //     if (size < 1)
    //         return BadRequest("Size must not be less than 1");
    //
    //     var query = new GetReviews(page, size);
    //     var modelsPage = await mediator.Send(query);
    //     return Ok(mapper.Map<V1PageDto<V1ReviewDto>>(modelsPage));
    // }
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1ReviewDto))]
    public async Task<IActionResult> Get(int id, [FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");
        
        var query = new GetTutorQuery(id);
        var model = await mediator.Send(query);
        var slice = GetReviewsSlice(model.Reviews, page, size);
        return Ok(mapper.Map<List<V1ReviewDto>>(slice));
    }

    private static IReadOnlyCollection<Review> GetReviewsSlice(ICollection<Review> modelReviews, int page, int size)
    {
        const int pageSize = 100; // ?
        
        return modelReviews
            .Skip(page * pageSize)
            .Take(size)
            .ToList();
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateReviewCommand))]
    public async Task<IActionResult> Update([FromBody] Review old)
    {
        var query = new UpdateReviewCommand(old);
        return Ok(await mediator.Send(query));
    }
}