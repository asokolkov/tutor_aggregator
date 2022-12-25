using MediatR;
using SPA.Models;

namespace SPA.Application.Locations.Queries.GetLocations;

internal sealed class GetLocations : IRequest<Page<Location>>
{
    public GetLocations(long pageNumber, long pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
    
    public long PageSize { get; }
    public long PageNumber { get; }
}
