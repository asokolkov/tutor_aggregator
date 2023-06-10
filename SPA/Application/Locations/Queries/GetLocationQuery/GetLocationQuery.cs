#nullable enable

using MediatR;

namespace SPA.Application.Locations.Queries.GetLocationQuery;

using Domain;

internal sealed record GetLocationQuery(Guid Id) : IRequest<Location?>;