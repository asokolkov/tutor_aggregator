#nullable enable
using MediatR;

namespace SPA.Application.Students.Queries.GetStudentsQuery;

using Domain;

internal record GetStudentsQuery(int PageNumber, int PageSize) : IRequest<Page<Student?>>;
