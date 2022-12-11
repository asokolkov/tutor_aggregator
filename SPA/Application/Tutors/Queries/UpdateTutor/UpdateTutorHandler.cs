using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;
using SPA.V1.DataModels;

namespace SPA.Application.Tutors.Queries.UpdateTutor;

[UsedImplicitly]
public class UpdateTutorHandler : IRequestHandler<UpdateTutor, V1TutorDto> 
{
    private readonly ICrudRepository<V1TutorDto> repository;
    
    public UpdateTutorHandler(ICrudRepository<V1TutorDto> repository)
    {
        this.repository = repository;
    }

    public async Task<V1TutorDto> Handle(UpdateTutor request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}