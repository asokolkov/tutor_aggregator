using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.GetStudentsQuery;

[UsedImplicitly]
internal class GetStudentsQueryHandler : IRequestHandler<GetStudentsQuery, Page<Student>>
{
    private readonly ICrudRepository<Student> repository;

    public GetStudentsQueryHandler(ICrudRepository<Student> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Student>> Handle(GetStudentsQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}