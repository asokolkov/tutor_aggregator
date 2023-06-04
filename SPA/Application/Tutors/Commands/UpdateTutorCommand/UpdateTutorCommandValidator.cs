namespace SPA.Application.Tutors.Commands.UpdateTutorCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class UpdateTutorCommandValidator : AbstractValidator<UpdateTutorCommand>
{
    public UpdateTutorCommandValidator()
    {
        RuleFor(command => command.TutorId).NotEmpty();
    }
}