using SPA.Application.Queries.Get;
using SPA.Application.Queries.GetPage;
using SPA.Application.Queries.Update;
using SPA.Models;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/lessons")]
public sealed class V1LessonsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1LessonsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet("")]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var getLessonsQuery = new GetPageQuery<Lesson>(page, size);
        var lessons = await mediator.Send(getLessonsQuery);
        return Ok(mapper.Map<V1PageDto<V1LessonDto>>(lessons));
    }
    
    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get(int id)
    {
        var getLessonQuery = new GetQuery<Lesson>(id);
        var lesson = await mediator.Send(getLessonQuery);
        return Ok(mapper.Map<V1LessonDto>(lesson));
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] V1LessonDto oldStudent)
    {
        var lesson = mapper.Map<Lesson>(oldStudent);
        lesson.Id = id;
        var updateLessonQuery = new UpdateQuery<Lesson>(lesson);
        return Ok(await mediator.Send(updateLessonQuery));
    }
}