using MediatR;
using SPA.Models;

namespace SPA.Application.Tutors.Queries.GetTutorsQuery;

internal record GetTutorsQuery(long PageNumber, long PageSize) : IRequest<Page<Tutor>>;
