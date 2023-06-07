namespace SPA.Application.Account.Commands.LoginCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class LoginCommandValidator : AbstractValidator<LoginCommand>
{
    public LoginCommandValidator()
    {
        RuleFor(command => command.Email).NotEmpty();
    }
}