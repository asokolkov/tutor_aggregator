using MediatR;
using SPA.Models;

namespace SPA.Application.Tutors.Queries.GetTutors;

internal sealed class GetTutors : IRequest<Page<Tutor>>
{
    public GetTutors(long pageNumber, long pageSize)
    {
        PageNumber = pageNumber;
        PageSize = pageSize;
    }
    
    public long PageSize { get; }
    public long PageNumber { get; }
}
