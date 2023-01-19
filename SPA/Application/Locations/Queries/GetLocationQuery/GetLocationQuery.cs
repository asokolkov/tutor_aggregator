#nullable enable
using MediatR;

namespace SPA.Application.Locations.Queries.GetLocationQuery;

using Domain;
using Entities;

internal record GetLocationQuery(Guid Id) : IRequest<Location?>;