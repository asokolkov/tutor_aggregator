using MediatR;
using SPA.Models;

namespace SPA.Application.Reviews.Queries.GetReviews;

internal sealed class GetReviews : IRequest<Page<Review>>
{
    public GetReviews(long pageNumber, long pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
    
    public long PageSize { get; }
    public long PageNumber { get; }
}
