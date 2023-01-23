using MediatR;

namespace SPA.Application.Students.Commands.UpdateStudentCommand;

using Domain;

internal record UpdateStudentCommand(Guid StudentId, UpdateStudent Student) : IRequest<Student>;