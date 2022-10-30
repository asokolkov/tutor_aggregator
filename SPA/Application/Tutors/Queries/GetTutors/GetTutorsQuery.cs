namespace SPA.Application.Tutors.Queries.GetTutors;

using MediatR;
using Models;

internal sealed class GetTutorsQuery : IRequest<Page<Tutor>>
{
    public GetTutorsQuery(long pageNumber, long pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
    
    public long PageSize { get; }
    public long PageNumber { get; }
}