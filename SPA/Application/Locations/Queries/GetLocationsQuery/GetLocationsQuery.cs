using MediatR;

namespace SPA.Application.Locations.Queries.GetLocationsQuery;

using Domain;

internal record GetLocationsQuery : IRequest<List<Location>>;
