using MediatR;
using SPA.Models;

namespace SPA.Application.Students.Queries.GetTutors;

internal sealed class GetStudents : IRequest<Page<Student>>
{
    public GetStudents(long pageNumber, long pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
    
    public long PageSize { get; }
    public long PageNumber { get; }
}
