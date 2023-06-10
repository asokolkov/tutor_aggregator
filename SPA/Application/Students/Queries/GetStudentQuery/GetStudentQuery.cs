#nullable enable

using MediatR;

namespace SPA.Application.Students.Queries.GetStudentQuery;

using Domain;

public record GetStudentQuery(Guid Id) : IRequest<Student?>;