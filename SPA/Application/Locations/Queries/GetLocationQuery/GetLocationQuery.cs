using MediatR;
using SPA.Models;

namespace SPA.Application.Locations.Queries.GetLocationQuery;

internal record GetLocationQuery(int Id) : IRequest<Location>;