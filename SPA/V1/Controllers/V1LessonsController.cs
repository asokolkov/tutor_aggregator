using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SPA.Application.Lessons.CreateLessonCommand;
using SPA.Application.Lessons.PickLessonCommand;
using SPA.Extensions;
using SPA.V1.DataModels;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using Application.Lessons.CancelLessonCommand;
using Authorization;

[Route("api/v1")]
public sealed class V1LessonsController : ControllerBase
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1LessonsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [Authorize(Policy = Policies.CreateLessonPolicy)]
    [HttpPost("lessons")]
    [SwaggerResponse(200, "OK", typeof(ICollection<V1LessonDto>))]
    public async Task<IActionResult> CreateAsync([FromBody] V1CreateLessonDto createLessonDto)
    {
        var tutorId = User.GetId();
        if (tutorId is null)
            return Unauthorized();
        var getTutorQuery = new CreateLessonCommand(tutorId.Value, createLessonDto.Start, createLessonDto.End,
            createLessonDto.Price);
        var lesson = await mediator.Send(getTutorQuery);
        if (lesson is null)
            return BadRequest();
        return Ok(mapper.Map<V1LessonDto>(lesson));
    }

    [Authorize(Policy = Policies.BookLessonPolicy)]
    [HttpPost("lessons/{id:guid}/book")]
    [SwaggerResponse(200, "OK", typeof(V1LessonDto))]
    public async Task<IActionResult> BookAsync(Guid id)
    {
        var studentId = User.GetId();
        if (studentId is null)
            return Unauthorized();
        var getTutorQuery = new BookLessonCommand(studentId.Value, id);
        var lesson = await mediator.Send(getTutorQuery);
        if (lesson is null)
            return BadRequest();
        return Ok(mapper.Map<V1LessonDto>(lesson));
    }

    [Authorize(Policy = Policies.CancelLessonPolicy)]
    [HttpPost("lessons/{id:guid}/cancel")]
    [SwaggerResponse(200, "OK", typeof(V1LessonDto))]
    public async Task<IActionResult> CancelAsync(Guid id)
    {
        var cancelLessonCommand = new CancelLessonCommand(id);
        var lesson = await mediator.Send(cancelLessonCommand);
        if (lesson is null)
            return BadRequest();
        return Ok(mapper.Map<V1LessonDto>(lesson));
    }
}