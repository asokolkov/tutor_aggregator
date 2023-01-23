namespace SPA.Application.Tutors.Queries.GetReviewsQuery;

using Domain;
using Entities;
using JetBrains.Annotations;
using MediatR;
using Repositories;

[UsedImplicitly]
internal class GetReviewsCommandHandler : IRequestHandler<GetTutorReviewsQuery, Page<Review>>
{
    private readonly ITutorsRepository repository;

    public GetReviewsCommandHandler(ITutorsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Review>> Handle(GetTutorReviewsQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetTutorReviews(request.TutorId, request.PageNumber, request.PageSize);
    }
}