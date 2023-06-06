using MediatR;
using SPA.Domain;

namespace SPA.Application.Tutors.Queries.GetTutorsPageQuery;

internal record GetTutorsPageQuery(int PageNumber, int PageSize, string Subject, string City, string District, int MaxPrice,
    int Rating) : IRequest<Page<Tutor>>;
