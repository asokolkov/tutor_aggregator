#nullable enable

using MediatR;

namespace SPA.Application.Tutors.Commands.UpdateTutorCommand;

using Domain;

internal record UpdateTutorCommand(Guid TutorId, UpdateTutor Tutor) : IRequest<Tutor?>;