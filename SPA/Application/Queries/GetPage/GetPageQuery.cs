using MediatR;
using SPA.Models;

namespace SPA.Application.Queries.GetPage;

public class GetPageQuery<T> : IRequest<Page<T>>
{
    public long PageSize { get; }
    
    public long PageNumber { get; }
    
    public GetPageQuery(long pageNumber, long pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
}