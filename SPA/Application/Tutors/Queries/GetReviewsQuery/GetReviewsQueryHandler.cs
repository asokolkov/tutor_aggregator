using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetReviewsQuery;

[UsedImplicitly]
internal class GetReviewsCommandHandler : IRequestHandler<GetReviewsQuery, Page<Review>>
{
    private readonly ITutorsRepository repository;

    public GetReviewsCommandHandler(ITutorsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Review>> Handle(GetReviewsQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetTutorReviewsAsync(request.TutorId, request.PageNumber, request.PageSize);
    }
}