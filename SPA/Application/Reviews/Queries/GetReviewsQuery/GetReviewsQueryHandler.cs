using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Reviews.Queries.GetReviewsQuery;

[UsedImplicitly]
internal class GetReviewsQueryHandler : IRequestHandler<GetReviewsQuery, Page<Review>>
{
    private readonly ICrudRepository<Review> repository;

    public GetReviewsQueryHandler(ICrudRepository<Review> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Review>> Handle(GetReviewsQuery request, CancellationToken cancellationToken)
    {
        return await repository.Get(request.PageNumber, request.PageSize);
    }
}