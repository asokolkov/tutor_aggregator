using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutorsQuery;

using Domain;
using Entities;

[UsedImplicitly]
internal class GetTutorsQueryHandler : IRequestHandler<GetTutorsQuery, Page<Tutor>>
{
    private readonly ITutorsRepository repository;

    public GetTutorsQueryHandler(ITutorsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Tutor>> Handle(GetTutorsQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize, request.Subject, 
            request.City, request.District, request.MaxPrice, request.Rating);
    }
}
