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

    [HttpGet("{tutorId:int}")]
    [SwaggerResponse(200, "OK", typeof(V1ReviewDto))]
    public async Task<IActionResult> Get(int tutorId, [FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");
        
        const int pageSize = 100; // ?
        
        var query = new GetTutorQuery(tutorId);
        var model = await mediator.Send(query);
        var slice = model.Reviews
            .Skip(page * pageSize)
            .Take(size)
            .ToList();
        return Ok(mapper.Map<ICollection<V1ReviewDto>>(slice));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateReviewCommand))]
    public async Task<IActionResult> Update([FromBody] V1ReviewDto old)
    {
        var model = mapper.Map<Review>(old);
        var query = new UpdateReviewCommand(model);
        return Ok(await mediator.Send(query));
    }
}