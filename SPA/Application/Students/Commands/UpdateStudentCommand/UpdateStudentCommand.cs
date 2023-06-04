using MediatR;

namespace SPA.Application.Students.Commands.UpdateStudentCommand;

using Domain;

public record UpdateStudentCommand(Guid StudentId, UpdateStudent Student) : IRequest<Student?>;