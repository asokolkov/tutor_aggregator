using MediatR;

namespace SPA.Application.Students.Commands.UpdateStudentCommand;

using Domain;
using Entities;

internal record UpdateStudentCommand(Guid StudentId, UpdateStudent Student) : IRequest<Student>;