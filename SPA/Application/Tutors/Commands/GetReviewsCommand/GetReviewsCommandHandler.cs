using JetBrains.Annotations;
using MediatR;
using SPA.Application.Tutors.Queries.GetTutorsQuery;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Tutors.Commands.GetReviewsCommand;

[UsedImplicitly]
internal class GetReviewsCommandHandler : IRequestHandler<GetReviewsCommand, Page<Review>>
{
    private readonly ICrudRepository<Tutor> repository;

    public GetReviewsCommandHandler(ICrudRepository<Tutor> repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Review>> Handle(GetReviewsCommand request, CancellationToken cancellationToken)
    {
        return await repository.GetTutorReviews(request.Id, request.PageNumber, request.PageSize);
    }
}