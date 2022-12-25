using MediatR;
using SPA.Models;

namespace SPA.Application.Locations.Queries.GetLocation;

public class GetLocation : IRequest<Location>
{
    public int Id { get; }
    
    public GetLocation(int id)
    {
        Id = id;
    }
}