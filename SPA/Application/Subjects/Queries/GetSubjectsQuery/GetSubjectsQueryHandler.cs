using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Subjects.Queries.GetSubjectsQuery;

internal sealed class GetSubjectQueryHandler : IRequestHandler<GetSubjectsQuery, List<Subject>>
{
    private readonly ISubjectsRepository repository;

    public GetSubjectQueryHandler(ISubjectsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<List<Subject>> Handle(GetSubjectsQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetAsync();
    }
}