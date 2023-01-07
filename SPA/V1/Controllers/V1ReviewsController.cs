using SPA.Application.Reviews.Commands.UpdateReviewCommand;
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

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateReviewCommand))]
    public async Task<IActionResult> Update([FromBody] V1ReviewDto old)
    {
        var model = mapper.Map<Review>(old);
        var query = new UpdateReviewCommand(model);
        return Ok(await mediator.Send(query));
    }
}