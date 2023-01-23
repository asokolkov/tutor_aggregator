#nullable enable
using MediatR;

namespace SPA.Application.Students.Queries.GetStudentQuery;

using Domain;

internal record GetStudentQuery(Guid Id) : IRequest<Student?>;