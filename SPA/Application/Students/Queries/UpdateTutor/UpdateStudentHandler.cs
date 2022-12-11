using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.UpdateTutor;

[UsedImplicitly]
public class UpdateStudentHandler : IRequestHandler<UpdateStudent, Student> 
{
    private readonly ICrudRepository<Student> repository;
    
    public UpdateStudentHandler(ICrudRepository<Student> repository)
    {
        this.repository = repository;
    }

    public async Task<Student> Handle(UpdateStudent request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}