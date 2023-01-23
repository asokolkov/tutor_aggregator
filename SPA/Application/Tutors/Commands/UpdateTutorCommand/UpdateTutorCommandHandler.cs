using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

#nullable enable

namespace SPA.Application.Tutors.Commands.UpdateTutorCommand;

using Domain;

[UsedImplicitly]
internal class UpdateTutorCommandHandler : IRequestHandler<UpdateTutorCommand, Tutor?> 
{
    private readonly ITutorsRepository repository;
    
    public UpdateTutorCommandHandler(ITutorsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Tutor?> Handle(UpdateTutorCommand request, CancellationToken cancellationToken)
    {
        return await repository.Update(request.TutorId, request.Tutor);
    }
}