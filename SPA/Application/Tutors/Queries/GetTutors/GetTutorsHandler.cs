using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutors;

[UsedImplicitly]
internal sealed class GetTutorsHandler : IRequestHandler<GetTutors, Page<Tutor>>
{
    private readonly ICrudRepository<Tutor> repository;

    public GetTutorsHandler(ICrudRepository<Tutor> tutorsRepository)
    {
        this.repository = tutorsRepository;
    }

    public async Task<Page<Tutor>> Handle(GetTutors request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}
