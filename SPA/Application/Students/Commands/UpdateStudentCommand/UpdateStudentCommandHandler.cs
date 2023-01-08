using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Students.Commands.UpdateStudentCommand;

[UsedImplicitly]
internal class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand, Student> 
{
    private readonly ICrudRepository<Student> repository;
    
    public UpdateStudentCommandHandler(ICrudRepository<Student> repository)
    {
        this.repository = repository;
    }

    public async Task<Student> Handle(UpdateStudentCommand request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}