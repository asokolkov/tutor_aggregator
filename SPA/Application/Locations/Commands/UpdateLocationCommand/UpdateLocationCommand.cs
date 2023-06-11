#nullable enable

using MediatR;

namespace SPA.Application.Locations.Commands.UpdateLocationCommand;

using Domain;

internal record UpdateLocationCommand(Location Element) : IRequest<Location?>;