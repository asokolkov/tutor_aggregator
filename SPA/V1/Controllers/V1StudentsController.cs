using SPA.Application.Students.Queries.GetStudent;
using SPA.Application.Students.Queries.GetTutors;
using SPA.Application.Students.Queries.UpdateTutor;
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

        var query = new GetStudents(page, size);
        var modelsPage = await mediator.Send(query);
        return Ok(mapper.Map<V1PageDto<V1StudentDto>>(modelsPage));
    }
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1StudentDto))]
    public async Task<IActionResult> Get(int id)
    {
        var query = new GetStudent(id);
        var model = await mediator.Send(query);
        return Ok(mapper.Map<V1StudentDto>(model));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateStudent))]
    public async Task<IActionResult> Update([FromBody] V1StudentDto old)
    {
        var query = new UpdateStudent(old);
        return Ok(await mediator.Send(query));
    }
}