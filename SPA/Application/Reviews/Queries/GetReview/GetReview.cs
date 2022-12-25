using MediatR;
using SPA.Models;

namespace SPA.Application.Reviews.Queries.GetReview;

public class GetReview : IRequest<Review>
{
    public int Id { get; }
    
    public GetReview(int id)
    {
        Id = id;
    }
}