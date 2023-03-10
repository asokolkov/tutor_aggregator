#nullable enable
using MediatR;

namespace SPA.Application.Locations.Queries.GetLocationsQuery;

using Domain;

internal record GetLocationsQuery(int PageNumber, int PageSize) : IRequest<Page<Location?>>;
