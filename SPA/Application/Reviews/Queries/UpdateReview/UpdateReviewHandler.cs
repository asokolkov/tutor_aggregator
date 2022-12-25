using JetBrains.Annotations;
using MediatR;
using SPA.Application.Locations.Queries.UpdateLocation;
using SPA.Repositories;
using SPA.V1.DataModels;

namespace SPA.Application.Reviews.Queries.UpdateReview;

[UsedImplicitly]
public class UpdateReviewHandler : IRequestHandler<UpdateReview, V1ReviewDto> 
{
    private readonly ICrudRepository<V1ReviewDto> repository;
    
    public UpdateReviewHandler(ICrudRepository<V1ReviewDto> repository)
    {
        this.repository = repository;
    }

    public async Task<V1ReviewDto> Handle(UpdateReview request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}