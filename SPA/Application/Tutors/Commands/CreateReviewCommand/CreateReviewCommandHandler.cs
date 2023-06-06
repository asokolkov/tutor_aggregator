#nullable enable

using JetBrains.Annotations;
using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Tutors.Commands.CreateReviewCommand;

[UsedImplicitly]
internal class CreateReviewCommandHandler : IRequestHandler<CreateReviewCommand, Review?> 
{
    private readonly IReviewsRepository repository;
    
    public CreateReviewCommandHandler(IReviewsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Review?> Handle(CreateReviewCommand request, CancellationToken cancellationToken)
    {
        return await repository.Insert(request.TutorId, request.StudentId, request.Review);
    }
}