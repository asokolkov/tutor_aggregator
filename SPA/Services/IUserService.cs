namespace SPA.Services;

using Identity.Models;
using Models;

public interface IUserService
{
    Task<Tutor> CreateTutor(ApplicationUser user);
    Task<Student> CreateStudent(ApplicationUser user);
}