namespace SPA.Application.Account.Commands.RegisterCommand;

using System.Text.RegularExpressions;
using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class RegisterCommandValidator : AbstractValidator<RegisterCommand>
{
    private readonly Regex phonePattern =
        new("^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$");
    
    public RegisterCommandValidator()
    {
        RuleFor(command => command.AccountType).IsInEnum();
        RuleFor(command => command.Email)
            .NotEmpty()
            .Must(email =>
            {
                var trimmedEmail = email.Trim();

                if (trimmedEmail.EndsWith("."))
                {
                    return false;
                }

                try
                {
                    var addr = new System.Net.Mail.MailAddress(email);
                    return addr.Address == trimmedEmail;
                }
                catch
                {
                    return false;
                }
            });

        RuleFor(command => command.FirstName).NotEmpty();
        RuleFor(command => command.LastName).NotEmpty();
        RuleFor(command => command.PhoneNumber).Matches(phonePattern);
    }
}