using JetBrains.Annotations;
using MediatR;
using SPA.Models;
using SPA.Repositories;

namespace SPA.Application.Tutors.Commands.UpdateTutorCommand;

[UsedImplicitly]
internal class UpdateTutorCommandHandler : IRequestHandler<UpdateTutorCommand, Tutor> 
{
    private readonly ICrudRepository<Tutor> repository;
    
    public UpdateTutorCommandHandler(ICrudRepository<Tutor> repository)
    {
        this.repository = repository;
    }

    public async Task<Tutor> Handle(UpdateTutorCommand request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.Element);
    }
}