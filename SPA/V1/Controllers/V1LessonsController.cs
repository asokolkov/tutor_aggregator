using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SPA.Application.Lessons.Commands.BookLessonCommand;
using SPA.Application.Lessons.Commands.CancelLessonCommand;
using SPA.Application.Lessons.Commands.CreateLessonCommand;
using SPA.Application.Lessons.Commands.DeleteLessonCommand;
using SPA.Authorization;
using SPA.Extensions;
using SPA.V1.DataModels;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

[Route("api/v1/lessons")]
public sealed class V1LessonsController : ControllerBase
{
    private readonly IMapper mapper;
    private readonly IMediator mediator;

    public V1LessonsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [Authorize(Policy = Policies.CreateLessonPolicy)]
    [HttpPost]
    [SwaggerResponse(200, "OK", typeof(ICollection<V1LessonDto>))]
    [SwaggerResponse(401, "Unauthorized")]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> CreateAsync([FromBody] V1CreateLessonDto createLessonDto)
    {
        var tutorId = User.GetId();
        if (tutorId is null)
            return Unauthorized();
        
        if (createLessonDto is null)
            return BadRequest();

        var query = new CreateLessonCommand(tutorId.Value, createLessonDto.Start, createLessonDto.End, createLessonDto.Price, createLessonDto.Type);
        var model = await mediator.Send(query);

        return model is not null ? Ok(mapper.Map<V1LessonDto>(model)) : NotFound();
    }

    [Authorize(Policy = Policies.BookLessonPolicy)]
    [HttpPatch("{id:guid}/book")]
    [SwaggerResponse(200, "OK", typeof(V1LessonDto))]
    [SwaggerResponse(401, "Unauthorized")]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> BookAsync(Guid id)
    {
        var studentId = User.GetId();
        if (studentId is null)
            return Unauthorized();

        var query = new BookLessonCommand(studentId.Value, id);
        var model = await mediator.Send(query);

        return model is not null ? Ok(mapper.Map<V1LessonDto>(model)) : NotFound();
    }

    [Authorize(Policy = Policies.DeleteLessonPolicy)]
    [HttpPatch("{id:guid}/delete")]
    [SwaggerResponse(200, "OK", typeof(V1LessonDto))]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> DeleteAsync(Guid id)
    {
        var command = new DeleteLessonCommand(id);
        var model = await mediator.Send(command);
        return model is not null ? Ok(mapper.Map<V1LessonDto>(model)) : NotFound();
    }
    
    [Authorize(Policy = Policies.CancelLessonPolicy)]
    [HttpPatch("{id:guid}/cancel")]
    [SwaggerResponse(200, "OK", typeof(V1LessonDto))]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> CancelAsync(Guid id)
    {
        var command = new CancelLessonCommand(id);
        var model = await mediator.Send(command);
        return model is not null ? Ok(mapper.Map<V1LessonDto>(model)) : NotFound();
    }
}