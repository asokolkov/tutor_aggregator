using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;
using SPA.V1.DataModels;

namespace SPA.Application.Students.Queries.UpdateTutor;

[UsedImplicitly]
public class UpdateStudentHandler : IRequestHandler<UpdateStudent, V1StudentDto> 
{
    private readonly ICrudRepository<V1StudentDto> repository;
    
    public UpdateStudentHandler(ICrudRepository<V1StudentDto> repository)
    {
        this.repository = repository;
    }

    public async Task<V1StudentDto> Handle(UpdateStudent request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}