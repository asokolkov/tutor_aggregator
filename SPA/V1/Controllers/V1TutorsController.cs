﻿using SPA.Application.Tutors.Commands.GetReviewsCommand;
using SPA.Application.Tutors.Commands.UpdateTutorCommand;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Application.Tutors.Queries.GetTutorsQuery;
using SPA.Models;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

using AutoMapper;
using DataModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/v1/tutors")]
public sealed class V1TutorsController : Controller
{
    private readonly IMediator mediator;
    private readonly IMapper mapper;

    public V1TutorsController(IMediator mediator, IMapper mapper)
    {
        this.mediator = mediator;
        this.mapper = mapper;
    }

    [HttpGet]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1TutorDto>))]
    public async Task<IActionResult> GetPage([FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var query = new GetTutorsQuery(page, size);
        var modelsPage = await mediator.Send(query);
        return Ok(mapper.Map<V1PageDto<V1TutorDto>>(modelsPage));
    }
    
    [HttpGet("{id:int}")]
    [SwaggerResponse(200, "OK", typeof(V1TutorDto))]
    public async Task<IActionResult> Get(int id)
    {
        var query = new GetTutorQuery(id);
        var model = await mediator.Send(query);
        return Ok(mapper.Map<V1TutorDto>(model));
    }
    
    [HttpGet("{id:int}/reviews")]
    [SwaggerResponse(200, "OK", typeof(ICollection<V1ReviewDto>))]
    public async Task<IActionResult> GetReviews(int id, [FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        var command = new GetReviewsCommand(id, page, size);
        var model = await mediator.Send(command);
        return Ok(mapper.Map<ICollection<V1ReviewDto>>(model.Items));
    }

    [HttpPut]
    [SwaggerResponse(200, "OK", typeof(UpdateTutorCommand))]
    public async Task<IActionResult> Update([FromBody] V1TutorDto old)
    {
        var model = mapper.Map<Tutor>(old);
        var query = new UpdateTutorCommand(model);
        return Ok(await mediator.Send(query));
    }
}