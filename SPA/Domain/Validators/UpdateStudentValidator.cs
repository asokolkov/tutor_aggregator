namespace SPA.Domain.Validators;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class UpdateStudentValidator : AbstractValidator<UpdateStudent>
{
    public UpdateStudentValidator()
    {
        RuleFor(model => model.FirstName).NotEmpty();
        RuleFor(model => model.LastName).NotEmpty();
        RuleFor(model => model.Age).Must(age => age > 0);
    }
}