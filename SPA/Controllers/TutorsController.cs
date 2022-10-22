namespace SPA.Controllers;

using Microsoft.AspNetCore.Mvc;
using Models;
using Repositories;

[ApiController]
[Route("[controller]")]
public sealed class TutorsController : Controller
{
    private readonly ICrudRepository<Tutor> tutorsRepository;

    public TutorsController(ICrudRepository<Tutor> tutorsRepository)
    {
        this.tutorsRepository = tutorsRepository;
    }

    [HttpGet]
    public IActionResult GetTutor()
    {
        return Ok();
    }
}