using MediatR;
using SPA.Models;

namespace SPA.Application.Tutors.Commands.UpdateTutorCommand;

internal record UpdateTutorCommand(Tutor Element) : IRequest<Tutor>;