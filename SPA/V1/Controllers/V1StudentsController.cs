using Newtonsoft.Json;
using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetLessonsQuery;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using Domain;
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
    private readonly LinkGenerator linkGenerator;

    public V1StudentsController(IMediator mediator, IMapper mapper, LinkGenerator linkGenerator)
    {
        this.mediator = mediator;
        this.mapper = mapper;
        this.linkGenerator = linkGenerator;
    }

    [HttpGet(Name = nameof(GetPage))]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1StudentDto>))]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var query = new GetStudentsQuery(page, size);
        var modelsPage = await mediator.Send(query);
        
        var previousPageLink = modelsPage.HasPrevious 
            ? linkGenerator.GetUriByRouteValues(HttpContext, nameof(GetPage), new { pageNumber = page - 1, size }) 
            : null;
        
        var nextPageLink = modelsPage.HasNext 
            ? linkGenerator.GetUriByRouteValues(HttpContext, nameof(GetPage), new { pageNumber = page + 1, size }) 
            : null;
        
        var paginationHeader = new { previousPageLink, nextPageLink };
        Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(paginationHeader));
        
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

    [Authorize]
    [HttpGet("current/lessons")]
    [SwaggerResponse(200, "OK", typeof(ICollection<V1LessonDto>))]
    [SwaggerResponse(401, "Unauthorized")]
    public async Task<IActionResult> GetLessonsAsync()
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        var getStudentLessonsQuery = new GetStudentLessonsQuery(userId.Value);
        var lessons = await mediator.Send(getStudentLessonsQuery);
        return Ok(mapper.Map<ICollection<V1LessonDto>>(lessons));
    }
    
    [Authorize]
    [HttpGet("current/lessons/{id:guid}/cancel")]
    [SwaggerResponse(200, "OK", typeof(ICollection<V1LessonDto>))]
    [SwaggerResponse(401, "Unauthorized")]
    public async Task<IActionResult> CancelLessonsAsync()
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        var getStudentLessonsQuery = new GetStudentLessonsQuery(userId.Value);
        var lessons = await mediator.Send(getStudentLessonsQuery);
        return Ok(mapper.Map<ICollection<V1LessonDto>>(lessons));
    }
}