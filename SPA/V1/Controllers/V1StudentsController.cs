using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using Domain;
using Entities;
using Extensions;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/v1/students")]
public sealed class V1StudentsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1StudentsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1StudentDto>))]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var query = new GetStudentsQuery(page, size);
        var modelsPage = await mediator.Send(query);
        return Ok(mapper.Map<V1PageDto<V1StudentDto>>(modelsPage));
    }

    [HttpGet("{id:guid}")]
    [SwaggerResponse(200, "OK", typeof(V1StudentDto))]
    public async Task<IActionResult> Get(Guid id)
    {
        var query = new GetStudentQuery(id);
        var model = await mediator.Send(query);
        return Ok(mapper.Map<V1StudentDto>(model));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(V1StudentDto))]
    [SwaggerResponse(401, "Unauthorized")]
    public async Task<IActionResult> Update([FromBody] V1UpdateStudentDto old)
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        var updateStudent = mapper.Map<UpdateStudent>(old);
        var query = new UpdateStudentCommand(userId.Value, updateStudent);
        var student = await mediator.Send(query);
        return Ok(mapper.Map<V1StudentDto>(student));
    }

    [Authorize]
    [HttpGet("profile")]
    [SwaggerResponse(200, "OK", typeof(V1StudentDto))]
    [SwaggerResponse(401, "Unauthorized")]
    public async Task<IActionResult> GetStudentProfile()
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        var getStudentQuery = new GetStudentQuery(userId.Value);
        var student = await mediator.Send(getStudentQuery);
        return Ok(mapper.Map<V1StudentDto>(student));
    }
}