#nullable enable
using MediatR;

namespace SPA.Application.Students.Queries.GetStudentsQuery;

using Domain;

public record GetStudentsQuery(int PageNumber, int PageSize) : IRequest<Page<Student>>;
