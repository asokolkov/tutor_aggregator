namespace SPA.Application.Locations.Commands.UpdateLocationCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class UpdateLocationCommandValidator : AbstractValidator<UpdateLocationCommand>
{
    public UpdateLocationCommandValidator()
    {
        RuleFor(command => command.Element).NotNull();
    }
}