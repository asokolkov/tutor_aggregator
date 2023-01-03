using MediatR;
using SPA.Models;
using SPA.V1.DataModels;

namespace SPA.Application.Tutors.Commands.UpdateTutorCommand;

internal record UpdateTutorCommand(Tutor Element) : IRequest<Tutor>;