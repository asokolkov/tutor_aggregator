using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutor;

[UsedImplicitly]
public class GetTutorHandler : IRequestHandler<GetTutor, Tutor> 
{
    private readonly ICrudRepository<Tutor> repository;
    
    public GetTutorHandler(ICrudRepository<Tutor> repository)
    {
        this.repository = repository;
    }

    public async Task<Tutor> Handle(GetTutor request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}