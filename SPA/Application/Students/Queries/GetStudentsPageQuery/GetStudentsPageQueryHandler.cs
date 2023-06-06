#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.GetStudentsPageQuery;

[UsedImplicitly]
internal class GetStudentsPageQueryHandler : IRequestHandler<GetStudentsPageQuery, Page<Student>>
{
    private readonly IStudentsRepository repository;

    public GetStudentsPageQueryHandler(IStudentsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Student>> Handle(GetStudentsPageQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetPageAsync(request.PageNumber, request.PageSize);
    }
}