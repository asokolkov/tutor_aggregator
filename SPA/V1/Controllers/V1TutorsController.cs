using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SPA.Application.Tutors.Commands.CreateReviewCommand;
using SPA.Application.Tutors.Commands.UpdateTutorCommand;
using SPA.Application.Tutors.Queries.GetLessonsQuery;
using SPA.Application.Tutors.Queries.GetReviewsQuery;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Application.Tutors.Queries.GetTutorsQuery;
using SPA.Authorization;
using SPA.Domain;
using SPA.Extensions;
using SPA.V1.DataModels;
using Swashbuckle.AspNetCore.Annotations;

namespace SPA.V1.Controllers;

[ApiController]
[Route("api/v1/tutors")]
public sealed class V1TutorsController : Controller
{
    private readonly IMapper mapper;
    private readonly IMediator mediator;
    private readonly LinkGenerator linkGenerator;

    public V1TutorsController(IMediator mediator, IMapper mapper, LinkGenerator linkGenerator)
    {
        this.mediator = mediator;
        this.mapper = mapper;
        this.linkGenerator = linkGenerator;
    }
    
    [HttpGet("{id:guid}")]
    [SwaggerResponse(200, "OK", typeof(V1TutorDto))]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> GetAsync(Guid id)
    {
        var query = new GetTutorQuery(id);
        var model = await mediator.Send(query);
        return model is not null ? Ok(mapper.Map<V1TutorDto>(model)) : NotFound();
    }
    
    [HttpGet(Name = nameof(GetTutorsPageAsync))]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1TutorDto>))]
    public async Task<IActionResult> GetTutorsPageAsync([FromQuery] int page = 0,
        [FromQuery] int size = 30, [FromQuery] string subject = "", [FromQuery] string city = "",
        [FromQuery] string district = "", [FromQuery] int maxPrice = -1, [FromQuery] int rating = -1)
    {
        if (page < 0)
            return BadRequest("Page must not be less than 0");
        if (size < 1)
            return BadRequest("Size must not be less than 1");

        var query = new GetTutorsQuery(page, size, subject, city, district, maxPrice, rating);
        var modelsPage = await mediator.Send(query);
        
        var previousPageLink = modelsPage.HasPrevious 
            ? linkGenerator.GetUriByRouteValues(HttpContext, nameof(GetTutorsPageAsync), new { pageNumber = page - 1, size }) 
            : null;
        
        var nextPageLink = modelsPage.HasNext 
            ? linkGenerator.GetUriByRouteValues(HttpContext, nameof(GetTutorsPageAsync), new { pageNumber = page + 1, size }) 
            : null;
        
        var paginationHeader = new { previousPageLink, nextPageLink };
        Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(paginationHeader));
        
        return Ok(mapper.Map<V1PageDto<V1TutorInfoDto>>(modelsPage));
    }
    
    [HttpPut]
    [Authorize]
    [SwaggerResponse(200, "OK", typeof(V1TutorDto))]
    [SwaggerResponse(401, "Unauthorized")]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> UpdateAsync([FromBody] V1UpdateTutorDto updateTutorDto)
    {
        var tutorId = User.GetId();
        if (tutorId is null)
            return Unauthorized();

        var query = new UpdateTutorCommand(tutorId.Value, mapper.Map<UpdateTutor>(updateTutorDto));
        var model = await mediator.Send(query);
        
        return model is not null ? Ok(mapper.Map<V1TutorDto>(model)) : NotFound();
    }

    [HttpGet("{id:guid}/reviews")]
    [SwaggerResponse(200, "OK", typeof(V1PageDto<V1ReviewDto>))]
    public async Task<IActionResult> GetReviewsAsync(Guid id, [FromQuery] int page = 0, [FromQuery] int size = 30)
    {
        var command = new GetReviewsQuery(id, page, size);
        var modelsPage = await mediator.Send(command);
        return Ok(mapper.Map<V1PageDto<V1ReviewDto>>(modelsPage));
    }

    [Authorize(Policy = Policies.CreateReviewPolicy)]
    [HttpPost("{id:guid}/reviews")]
    [SwaggerResponse(200, "OK", typeof(V1ReviewDto))]
    [SwaggerResponse(401, "Unauthorized")]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> CreateReviewAsync(Guid id, [FromBody] V1CreateReviewDto reviewDto)
    {
        var studentId = User.GetId();
        if (studentId is null)
            return Unauthorized();
        
        var command = new CreateReviewCommand(id, studentId.Value, mapper.Map<Review>(reviewDto));
        var model = await mediator.Send(command);
        
        return model is not null ? Ok(mapper.Map<V1ReviewDto>(model)) : NotFound();
    }

    [Authorize]
    [HttpGet("profile")]
    [SwaggerResponse(200, "OK", typeof(V1TutorDto))]
    [SwaggerResponse(401, "Unauthorized")]
    [SwaggerResponse(404, "NotFound")]
    public async Task<IActionResult> GetProfileAsync()
    {
        var userId = User.GetId();
        if (userId is null)
            return Unauthorized();
        
        var query = new GetTutorQuery(userId.Value);
        var model = await mediator.Send(query);
        
        return model is not null ? Ok(mapper.Map<V1TutorDto>(model)) : NotFound();
    }

    [HttpGet("{id:guid}/lessons")]
    [SwaggerResponse(200, "OK", typeof(ICollection<V1LessonDto>))]
    public async Task<IActionResult> GetLessonsAsync(Guid id, [FromQuery] DateTimeOffset date)
    {
        var query = new GetTutorLessonsQuery(id, date);
        var models = await mediator.Send(query);
        return Ok(mapper.Map<ICollection<V1LessonDto>>(models));
    }
}