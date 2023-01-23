#nullable enable
using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.GetStudentQuery;

using Domain;

[UsedImplicitly]
internal class GetStudentQueryHandler : IRequestHandler<GetStudentQuery, Student?> 
{
    private readonly IStudentsRepository repository;
    
    public GetStudentQueryHandler(IStudentsRepository repository)
    {
        this.repository = repository;
    }
    
    public async Task<Student?> Handle(GetStudentQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}