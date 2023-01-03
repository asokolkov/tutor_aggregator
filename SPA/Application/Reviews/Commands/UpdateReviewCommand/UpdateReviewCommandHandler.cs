using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Reviews.Commands.UpdateReviewCommand;

[UsedImplicitly]
internal class UpdateReviewCommandHandler : IRequestHandler<UpdateReviewCommand, Review> 
{
    private readonly ICrudRepository<Review> repository;
    
    public UpdateReviewCommandHandler(ICrudRepository<Review> repository)
    {
        this.repository = repository;
    }

    public async Task<Review> Handle(UpdateReviewCommand request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}