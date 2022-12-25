using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.GetStudents;

[UsedImplicitly]
internal sealed class GetStudentsHandler : IRequestHandler<GetTutors.GetStudents, Page<Student>>
{
    private readonly ICrudRepository<Student> repository;

    public GetStudentsHandler(ICrudRepository<Student> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Student>> Handle(GetTutors.GetStudents request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}