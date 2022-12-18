using SPA.Application.Queries.Get;
using SPA.Application.Queries.GetPage;
using SPA.Application.Queries.Update;
using SPA.Models;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/students")]
public sealed class V1StudentsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1StudentsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet("")]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1StudentDto>))]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var getStudentsQuery = new GetPageQuery<Student>(page, size);
        var students = await mediator.Send(getStudentsQuery);
        return Ok(mapper.Map<V1PageDto<V1StudentDto>>(students));
    }
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1StudentDto))]
    public async Task<IActionResult> Get(int id)
    {
        var getStudentQuery = new GetQuery<Student>(id);
        var student = await mediator.Send(getStudentQuery);
        return Ok(mapper.Map<V1StudentDto>(student));
    }

    [HttpPut("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(UpdateQuery<Student>))]
    public async Task<IActionResult> Update(int id, [FromBody] V1StudentDto oldStudent)
    {
        var student = mapper.Map<Student>(oldStudent);
        student.Id = id;
        var updateStudentQuery = new UpdateQuery<Student>(student);
        return Ok(await mediator.Send(updateStudentQuery));
    }
}