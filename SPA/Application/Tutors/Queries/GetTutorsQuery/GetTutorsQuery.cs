using MediatR;

namespace SPA.Application.Tutors.Queries.GetTutorsQuery;

using Domain;
using Entities;

internal record GetTutorsQuery(int PageNumber, int PageSize) : IRequest<Page<Tutor>>;
