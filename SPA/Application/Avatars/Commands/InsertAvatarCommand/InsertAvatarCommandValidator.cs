namespace SPA.Application.Avatars.Commands.InsertAvatarCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
public sealed class InsertAvatarCommandValidator : AbstractValidator<InsertAvatarCommand>
{
    public InsertAvatarCommandValidator()
    {
        RuleFor(command => command.Id).NotEmpty();
    }
}