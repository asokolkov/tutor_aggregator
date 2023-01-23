using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Students.Commands.UpdateStudentCommand;

using Domain;

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
        return await repository.Update(request.StudentId, request.Student);
    }
}