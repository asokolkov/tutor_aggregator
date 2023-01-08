using MediatR;
using SPA.Models;

namespace SPA.Application.Locations.Commands.UpdateLocationCommand;

internal record UpdateLocationCommand(Location Element) : IRequest<Location>;