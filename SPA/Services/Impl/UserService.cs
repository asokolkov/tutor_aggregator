namespace SPA.Services.Impl;

using Identity.Models;
using JetBrains.Annotations;
using Models;
using Repositories;

[UsedImplicitly]
internal sealed class UserService : IUserService
{
    private readonly ICrudRepository<Tutor> tutorRepository;
    private readonly ICrudRepository<Student> studentRepository;

    public UserService(ICrudRepository<Tutor> tutorRepository, ICrudRepository<Student> studentRepository)
    {
        this.tutorRepository = tutorRepository;
        this.studentRepository = studentRepository;
    }

    public async Task<Tutor> CreateTutor(ApplicationUser user)
    {
        var tutor = new Tutor
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName
        };

        return await tutorRepository.Insert(tutor);
    }

    public async Task<Student> CreateStudent(ApplicationUser user)
    {
        var student = new Student
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName
        };

        return await studentRepository.Insert(student);
    }
}