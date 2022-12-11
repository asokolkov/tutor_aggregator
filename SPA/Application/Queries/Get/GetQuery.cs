using MediatR;
using SPA.Models;

namespace SPA.Application.Queries.Get;

public class GetQuery<T> : IRequest<T>
{
    public int Id { get; }
    
    public GetQuery(int id)
    {
        Id = id;
    }
}