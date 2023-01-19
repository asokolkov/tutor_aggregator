using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Students.Commands.UpdateStudentCommand;

using Domain;
using Entities;

[UsedImplicitly]
internal class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand, Student> 
{
    private readonly IStudentsRepository repository;
    
    public UpdateStudentCommandHandler(IStudentsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Student> Handle(UpdateStudentCommand request, CancellationToken cancellationToken)
    {
        var student = await repository.Get(request.StudentId);
        student.FirstName = request.Student.FirstName;
        student.LastName = request.Student.LastName;
        //TODO: добавить остальные поля
        return await repository.Update(student);
    }
}