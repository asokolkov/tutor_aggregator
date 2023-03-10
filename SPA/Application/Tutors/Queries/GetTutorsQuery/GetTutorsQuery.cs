using MediatR;

namespace SPA.Application.Tutors.Queries.GetTutorsQuery;

using Domain;

internal record GetTutorsQuery(int PageNumber, int PageSize, string Subject, string City, string District, int MaxPrice,
    int Rating) : IRequest<Page<Tutor>>;
