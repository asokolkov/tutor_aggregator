using SPA.Application.Tutors.Commands.UpdateTutorCommand;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Application.Tutors.Queries.GetTutorsQuery;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using Application.Tutors.Queries.GetReviewsQuery;
using AutoMapper;
using DataModels;
using Domain;
using Extensions;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/v1/tutors")]
public sealed class V1TutorsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1TutorsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet]
    // [SwaggerResponse(200, "OK", typeof(V1PageDto<V1TutorDto>))]
    public async Task<IActionResult> GetPageAsync([FromQuery] int page = 0, 
        [FromQuery] int size = 30, [FromQuery] string subject = "", [FromQuery] string city = "Екатеринбург", 
        [FromQuery] string district = "", [FromQuery] int maxPrice = -1, [FromQuery] int rating = -1)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var query = new GetTutorsQuery(page, size, subject, city, district, maxPrice, rating);
        var modelsPage = await mediator.Send(query);
        return Ok(mapper.Map<V1PageDto<V1TutorDto>>(modelsPage));
    }

    [HttpGet("{id:guid}")]
    [SwaggerResponse(200, "OK", typeof(V1TutorDto))]
    public async Task<IActionResult> GetAsync(Guid id)
    {
        var query = new GetTutorQuery(id);
        var model = await mediator.Send(query);
        return Ok(mapper.Map<V1TutorDto>(model));
    }

    [HttpGet("{id:guid}/reviews")]
    [SwaggerResponse(200, "OK", typeof(ICollection<V1ReviewDto>))]
    public async Task<IActionResult> GetReviewsAsync(Guid id, [FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        var command = new GetTutorReviewsQuery(id, page, size);
        var model = await mediator.Send(command);
        return Ok(mapper.Map<ICollection<V1ReviewDto>>(model.Items));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(V1TutorDto))]
    public async Task<IActionResult> UpdateAsync([FromBody] V1UpdateTutorDto updateTutorDto)
    {
        var tutorId = User.GetId();
        if (tutorId is null)
            return Unauthorized();

        var updateTutor = mapper.Map<UpdateTutor>(updateTutorDto);
        
        var query = new UpdateTutorCommand(tutorId.Value, updateTutor);
        var tutor = await mediator.Send(query);
        return Ok(mapper.Map<V1TutorDto>(tutor));
    }

    [Authorize]
    [HttpGet("profile")]
    [SwaggerResponse(200, "OK", typeof(V1TutorDto))]
    [SwaggerResponse(401, "Unauthorized")]
    public async Task<IActionResult> GetProfileAsync()
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        var getTutorQuery = new GetTutorQuery(userId.Value);
        var tutor = await mediator.Send(getTutorQuery);
        if (tutor is null)
            return NotFound();
        return Ok(mapper.Map<V1TutorDto>(tutor));
    }
}