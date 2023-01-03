using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Reviews.Queries.GetReviewQuery;

[UsedImplicitly]
internal class GetReviewQueryHandler : IRequestHandler<GetReviewQuery, Review> 
{
    private readonly ICrudRepository<Review> repository;
    
    public GetReviewQueryHandler(ICrudRepository<Review> repository)
    {
        this.repository = repository;
    }

    public async Task<Review> Handle(GetReviewQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.Id);
    }
}