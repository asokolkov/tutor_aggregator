namespace SPA.Application.Tutors.Queries.GetTutors;

using JetBrains.Annotations;
using MediatR;
using Models;
using Repositories;


[UsedImplicitly]
internal sealed class GetTutorsQueryHandler : IRequestHandler<GetTutorsQuery, Page<Tutor>>
{
    private readonly ICrudRepository<Tutor> tutorsRepository;

    public GetTutorsQueryHandler(ICrudRepository<Tutor> tutorsRepository)
    {
        this.tutorsRepository = tutorsRepository;
    }

    public async Task<Page<Tutor>> Handle(GetTutorsQuery request, CancellationToken cancellationToken)
    {
        return await tutorsRepository.Get(request.PageNumber, request.PageSize);
    }
}