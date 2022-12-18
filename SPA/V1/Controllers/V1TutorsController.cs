using SPA.Application.Tutors.Queries.GetTutor;
using SPA.Application.Tutors.Queries.GetTutors;
using SPA.Application.Tutors.Queries.UpdateTutor;
using SPA.Models;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/tutors")]
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
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1TutorDto>))]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var getTutorsQuery = new GetTutors(page, size);
        var tutors = await mediator.Send(getTutorsQuery);
        return Ok(mapper.Map<V1PageDto<V1TutorDto>>(tutors));
    }
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1TutorDto))]
    public async Task<IActionResult> Get(int id)
    {
        var getTutorQuery = new GetTutor(id);
        var tutor = await mediator.Send(getTutorQuery);
        return Ok(mapper.Map<V1TutorDto>(tutor));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateQuery<Tutor>))]
    public async Task<IActionResult> Update([FromBody] V1TutorDto old)
    {
        var updateStudentQuery = new UpdateTutor(old);
        return Ok(await mediator.Send(updateStudentQuery));
    }
}