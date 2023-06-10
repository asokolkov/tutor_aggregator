#nullable enable

using MediatR;
using SPA.Domain;

namespace SPA.Application.Tutors.Queries.GetTutorsQuery;

internal record GetTutorsQuery(int PageNumber, int PageSize, string? Subject, string? City, string? District, int? MaxPrice,
    int? Rating) : IRequest<Page<Tutor>>;
