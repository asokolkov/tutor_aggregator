using SPA.Application.Lessons.Queries.GetLesson;
using SPA.Application.Lessons.Queries.GetLessons;
using SPA.Application.Lessons.Queries.UpdateLesson;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/v1/lessons")]
public sealed class V1LessonsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1LessonsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1LessonDto>))]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var getLessonsQuery = new GetLessons(page, size);
        var lessons = await mediator.Send(getLessonsQuery);
        return Ok(mapper.Map<V1PageDto<V1LessonDto>>(lessons));
    }
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1LessonDto))]
    public async Task<IActionResult> Get(int id)
    {
        var getLessonQuery = new GetLesson(id);
        var lesson = await mediator.Send(getLessonQuery);
        return Ok(mapper.Map<V1LessonDto>(lesson));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateLesson))]
    public async Task<IActionResult> Update([FromBody] V1LessonDto old)
    {
        var updateLessonQuery = new UpdateLesson(old);
        return Ok(await mediator.Send(updateLessonQuery));
    }
}