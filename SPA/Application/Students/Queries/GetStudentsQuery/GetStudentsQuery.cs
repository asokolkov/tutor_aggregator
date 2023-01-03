using MediatR;
using SPA.Models;

namespace SPA.Application.Students.Queries.GetStudentsQuery;

internal record GetStudentsQuery(long PageNumber, long PageSize) : IRequest<Page<Student>>;
