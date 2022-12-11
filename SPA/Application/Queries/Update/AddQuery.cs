using MediatR;

namespace SPA.Application.Queries.Update;

public class UpdateQuery<T> : IRequest<T>
{
    public T Element { get; }
    
    public UpdateQuery(T element)
    {
        Element = element;
    }
}