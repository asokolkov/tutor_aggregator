using MediatR;
using SPA.Models;

namespace SPA.Application;

public class Query<T> : IRequest<Page<T>>
{
    public Query(long pageNumber, long pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
    
    public long PageSize { get; }
    public long PageNumber { get; }
}