using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.UpdateTutor;

[UsedImplicitly]
public class UpdateTutorHandler : IRequestHandler<UpdateTutor, Tutor> 
{
    private readonly ICrudRepository<Tutor> repository;
    
    public UpdateTutorHandler(ICrudRepository<Tutor> repository)
    {
        this.repository = repository;
    }

    public async Task<Tutor> Handle(UpdateTutor request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}