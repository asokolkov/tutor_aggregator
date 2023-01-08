using MediatR;
using SPA.Models;

namespace SPA.Application.Students.Commands.UpdateStudentCommand;

internal record UpdateStudentCommand(Student Element) : IRequest<Student>;