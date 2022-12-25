using MediatR;
using SPA.V1.DataModels;

namespace SPA.Application.Reviews.Queries.UpdateReview;

public class UpdateReview : IRequest<V1ReviewDto>
{
    public V1ReviewDto Element { get; }
    
    public UpdateReview(V1ReviewDto element)
    {
        Element = element;
    }
}