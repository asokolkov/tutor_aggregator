using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Reviews.Queries.GetReviews;

[UsedImplicitly]
internal sealed class GetReviewsHandler : IRequestHandler<GetReviews, Page<Review>>
{
    private readonly ICrudRepository<Review> repository;

    public GetReviewsHandler(ICrudRepository<Review> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Review>> Handle(GetReviews request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}