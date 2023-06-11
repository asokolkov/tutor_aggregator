using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutorsQuery;

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
        return await repository.GetPageAsync(request.PageNumber, request.PageSize, request.Subject, 
            request.City, request.District, request.MaxPrice, request.Rating, request.LessonsType);
    }
}
