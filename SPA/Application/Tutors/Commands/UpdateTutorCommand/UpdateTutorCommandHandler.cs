using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

#nullable enable

namespace SPA.Application.Tutors.Commands.UpdateTutorCommand;

using Domain;
using Entities;

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
        var tutor = await repository.Get(request.TutorId);

        if (tutor is null)
            return null;
        
        tutor.FirstName = request.Tutor.FirstName;
        tutor.LastName = request.Tutor.LastName;
        tutor.Requirements = request.Tutor.Requirements;
        tutor.Job = request.Tutor.Job;
        tutor.Location = request.Tutor.Location;
        
        //TODO: остальные поля

        return await repository.Update(tutor);
    }
}