using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutorQuery;

[UsedImplicitly]
internal class GetTutorQueryHandler : IRequestHandler<GetTutorQuery, Tutor> 
{
    private readonly ICrudRepository<Tutor> repository;
    
    public GetTutorQueryHandler(ICrudRepository<Tutor> repository)
    {
        this.repository = repository;
    }

    public async Task<Tutor> Handle(GetTutorQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}