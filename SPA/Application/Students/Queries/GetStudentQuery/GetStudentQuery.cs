using MediatR;
using SPA.Models;

namespace SPA.Application.Students.Queries.GetStudentQuery;

internal record GetStudentQuery(int Id) : IRequest<Student>;