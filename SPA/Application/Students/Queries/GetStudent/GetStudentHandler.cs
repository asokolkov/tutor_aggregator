using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.GetStudent;

[UsedImplicitly]
public class GetStudentHandler : IRequestHandler<GetStudent, Student> 
{
    private readonly ICrudRepository<Student> repository;
    
    public GetStudentHandler(ICrudRepository<Student> repository)
    {
        this.repository = repository;
    }

    public async Task<Student> Handle(GetStudent request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}