using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using SPA.Models;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using MediatR;
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
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1StudentDto))]
    public async Task<IActionResult> Get(int id)
    {
        var query = new GetStudentQuery(id);
        var model = await mediator.Send(query);
        return Ok(mapper.Map<V1StudentDto>(model));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateStudentCommand))]
    public async Task<IActionResult> Update([FromBody] V1StudentDto old)
    {
        var model = mapper.Map<Student>(old);
        var query = new UpdateStudentCommand(model);
        return Ok(await mediator.Send(query));
    }
}