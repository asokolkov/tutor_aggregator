namespace SPA.Services;

using Domain;

using Identity.Models;

public interface IUserService
{
    Task<Tutor> CreateTutor(ApplicationUser user);
    Task<Student> CreateStudent(ApplicationUser user);
}