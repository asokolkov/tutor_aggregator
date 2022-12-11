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
[Route("api/subjects")]
public sealed class V1SubjectsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1SubjectsController(IMediator mediator, IMapper mapper)
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

        var getSubjectsQuery = new GetPageQuery<Subject>(page, size);
        var subjects = await mediator.Send(getSubjectsQuery);
        return Ok(mapper.Map<V1PageDto<V1SubjectDto>>(subjects));
    }
    
    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get(int id)
    {
        var getSubjectQuery = new GetQuery<Subject>(id);
        var subject = await mediator.Send(getSubjectQuery);
        return Ok(mapper.Map<V1SubjectDto>(subject));
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] V1SubjectDto oldStudent)
    {
        var subject = mapper.Map<Subject>(oldStudent);
        subject.Id = id;
        var updateStudentQuery = new UpdateQuery<Subject>(subject);
        return Ok(await mediator.Send(updateStudentQuery));
    }
}