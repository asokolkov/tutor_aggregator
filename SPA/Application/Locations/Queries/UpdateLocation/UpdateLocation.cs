using MediatR;
using SPA.V1.DataModels;

namespace SPA.Application.Locations.Queries.UpdateLocation;

public class UpdateLocation : IRequest<V1LocationDto>
{
    public V1LocationDto Element { get; }
    
    public UpdateLocation(V1LocationDto element)
    {
        Element = element;
    }
}