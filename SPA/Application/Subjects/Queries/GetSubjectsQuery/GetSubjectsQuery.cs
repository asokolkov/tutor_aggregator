using MediatR;
using SPA.Domain;

namespace SPA.Application.Subjects.Queries.GetSubjectsQuery;

internal sealed record GetSubjectsQuery : IRequest<List<Subject>>;