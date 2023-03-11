namespace SPA.Services;

using Domain;
using EFCore.Postgres.Identity.Models;

public interface IUserService
{
    Task<Tutor> CreateTutor(ApplicationUser user);
    Task<Student> CreateStudent(ApplicationUser user);
}