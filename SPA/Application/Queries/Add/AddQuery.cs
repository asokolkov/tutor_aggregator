using MediatR;

namespace SPA.Application.Queries.Add;

public class AddQuery<T> : IRequest<T>
{
    public T Element { get; }
    
    public AddQuery(T element)
    {
        Element = element;
    }
}