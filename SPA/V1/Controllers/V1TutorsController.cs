using SPA.Application;
using SPA.Application.Queries;
using SPA.Models;

namespace SPA.V1.Controllers;

using Application.Tutors.Queries.GetTutors;
using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("api")]
public sealed class V1TutorsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1TutorsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet("tutors")]
    public async Task<IActionResult> GetS([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");
        
        var getTutorsQuery = new GetTutorsQuery(page, size);
        var tutors = await mediator.Send(getTutorsQuery);

        return Ok(mapper.Map<V1PageDto<V1TutorDto>>(tutors));
    }
}