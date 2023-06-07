namespace SPA.Application.Tutors.Commands.UpdateTutorCommand;

using Domain;
using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class UpdateTutorCommandValidator : AbstractValidator<UpdateTutorCommand>
{
    public UpdateTutorCommandValidator(IValidator<UpdateTutor> updateTutorValidator)
    {
        RuleFor(command => command.TutorId).NotEmpty();
        RuleFor(command => command.Tutor).SetValidator(updateTutorValidator);
    }
}