using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SPA.Application.Subjects.Queries.GetSubjectsQuery;
using SPA.Domain;
using SPA.V1.DataModels;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

[ApiController]
[Route("api/v1/subjects")]
public class V1SubjectsController : ControllerBase
{
    private readonly IMapper mapper;
    private readonly IMediator mediator;

    public V1SubjectsController(IMapper mapper, IMediator mediator)
    {
        this.mapper = mapper;
        this.mediator = mediator;
    }

    [HttpGet]
    [SwaggerResponse(200, "OK", typeof(ICollection<V1SubjectDto>))]
    public async Task<IActionResult> GetAsync()
    {
        var query = new GetSubjectsQuery();
        var models = await mediator.Send(query);
        return Ok(mapper.Map<List<V1SubjectDto>>(models));
    }
}