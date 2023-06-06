using AutoMapper;
using EFCore.Postgres.Identity.Models;
using JetBrains.Annotations;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Services.Impl;

[UsedImplicitly]
internal sealed class UserService : IUserService
{
    private readonly IMapper mapper;
    private readonly IStudentsRepository studentRepository;
    private readonly ITutorsRepository tutorsRepository;

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
            LastName = user.LastName,
            Contacts = new List<TutorContact>
            {
                new() { Id = Guid.NewGuid(), Type = ContactType.Email, Value = user.Email },
                new() { Id = Guid.NewGuid(), Type = ContactType.Phone, Value = user.PhoneNumber }
            }
        };

        return await tutorsRepository.Insert(tutor);
    }

    public async Task<Student> CreateStudent(ApplicationUser user)
    {
        var student = new Student
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Contacts = new List<StudentContact>
            {
                new() { Id = Guid.NewGuid(), Type = ContactType.Email, Value = user.Email },
                new() { Id = Guid.NewGuid(), Type = ContactType.Phone, Value = user.PhoneNumber }
            }
        };

        return await studentRepository.InsertAsync(student);
    }
}