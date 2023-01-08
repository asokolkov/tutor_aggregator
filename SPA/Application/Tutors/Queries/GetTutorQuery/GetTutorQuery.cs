using MediatR;
using SPA.Models;

namespace SPA.Application.Tutors.Queries.GetTutorQuery;

internal record GetTutorQuery(int Id) : IRequest<Tutor>;