#nullable enable
using MediatR;

namespace SPA.Application.Locations.Queries.GetLocationsQuery;

using Domain;
using Entities;

internal record GetLocationsQuery(int PageNumber, int PageSize) : IRequest<Page<Location?>>;
