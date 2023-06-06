#nullable enable

using MediatR;
using SPA.Domain;

namespace SPA.Application.Students.Queries.GetStudentsPageQuery;

internal record GetStudentsPageQuery(int PageNumber, int PageSize) : IRequest<Page<Student>>;
