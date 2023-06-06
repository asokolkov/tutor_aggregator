using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutorsPageQuery;

[UsedImplicitly]
internal class GetTutorsPageQueryHandler : IRequestHandler<GetTutorsPageQuery, Page<Tutor>>
{
    private readonly ITutorsRepository repository;

    public GetTutorsPageQueryHandler(ITutorsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Tutor>> Handle(GetTutorsPageQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetPageAsync(request.PageNumber, request.PageSize, request.Subject, 
            request.City, request.District, request.MaxPrice, request.Rating);
    }
}
