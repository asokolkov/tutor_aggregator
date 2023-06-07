namespace SPA.Domain.Validators;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class UpdateTutorValidator : AbstractValidator<UpdateTutor>
{
    public UpdateTutorValidator()
    {
        RuleFor(model => model.FirstName).NotEmpty();
        RuleFor(model => model.Age).Must(age => age > 0);
        RuleFor(model => model.LastName).NotEmpty();
    }
}