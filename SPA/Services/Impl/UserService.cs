namespace SPA.Services.Impl;

using AutoMapper;
using Domain;
using Identity.Models;
using JetBrains.Annotations;
using Repositories;

[UsedImplicitly]
internal sealed class UserService : IUserService
{
    private readonly IMapper mapper;
    private readonly ITutorsRepository tutorsRepository;
    private readonly IStudentsRepository studentRepository;

    public UserService(ITutorsRepository tutorsRepository, IStudentsRepository studentRepository, IMapper mapper)
    {
        this.tutorsRepository = tutorsRepository;
        this.studentRepository = studentRepository;
        this.mapper = mapper;
    }

    public async Task<Tutor> CreateTutor(ApplicationUser user)
    {
        var tutor = new Tutor
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName
        };
        
        return await tutorsRepository.Insert(tutor);
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