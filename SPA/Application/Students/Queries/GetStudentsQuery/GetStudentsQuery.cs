using MediatR;
using SPA.Domain;

namespace SPA.Application.Students.Queries.GetStudentsQuery;

internal record GetStudentsQuery(int PageNumber, int PageSize) : IRequest<Page<Student>>;
