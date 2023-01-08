using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutorsQuery;

[UsedImplicitly]
internal class GetTutorsQueryHandler : IRequestHandler<GetTutorsQuery, Page<Tutor>>
{
    private readonly ICrudRepository<Tutor> repository;

    public GetTutorsQueryHandler(ICrudRepository<Tutor> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Tutor>> Handle(GetTutorsQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}
