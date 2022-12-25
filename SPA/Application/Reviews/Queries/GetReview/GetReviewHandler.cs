using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Reviews.Queries.GetReview;

[UsedImplicitly]
public class GetReviewHandler : IRequestHandler<GetReview, Review> 
{
    private readonly ICrudRepository<Review> repository;
    
    public GetReviewHandler(ICrudRepository<Review> repository)
    {
        this.repository = repository;
    }

    public async Task<Review> Handle(GetReview request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}