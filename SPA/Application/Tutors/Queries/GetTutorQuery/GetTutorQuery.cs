using MediatR;

namespace SPA.Application.Tutors.Queries.GetTutorQuery;

using Domain;

internal record GetTutorQuery(Guid Id) : IRequest<Tutor>;