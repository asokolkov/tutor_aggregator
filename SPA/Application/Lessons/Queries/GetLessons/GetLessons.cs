using MediatR;
using SPA.Models;

namespace SPA.Application.Lessons.Queries.GetLessons;

internal sealed class GetLessons : IRequest<Page<Lesson>>
{
    public GetLessons(long pageNumber, long pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
    
    public long PageSize { get; }
    public long PageNumber { get; }
}
