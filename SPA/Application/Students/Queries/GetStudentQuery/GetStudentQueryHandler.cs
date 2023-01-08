using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.GetStudentQuery;

[UsedImplicitly]
internal class GetStudentQueryHandler : IRequestHandler<GetStudentQuery, Student> 
{
    private readonly ICrudRepository<Student> repository;
    
    public GetStudentQueryHandler(ICrudRepository<Student> repository)
    {
        this.repository = repository;
    }

    public async Task<Student> Handle(GetStudentQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}