using MediatR;
using SPA.Models;

namespace SPA.Application.Locations.Queries.GetLocationsQuery;

internal record GetLocationsQuery(long PageNumber, long PageSize) : IRequest<Page<Location>>;
