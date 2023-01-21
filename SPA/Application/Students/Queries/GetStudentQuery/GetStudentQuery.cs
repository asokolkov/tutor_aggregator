#nullable enable
using MediatR;

namespace SPA.Application.Students.Queries.GetStudentQuery;

using Domain;
using Entities;

internal record GetStudentQuery(Guid Id) : IRequest<Student?>;