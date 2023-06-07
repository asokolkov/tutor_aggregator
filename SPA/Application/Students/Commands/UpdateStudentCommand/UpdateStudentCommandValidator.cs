namespace SPA.Application.Students.Commands.UpdateStudentCommand;

using Domain;
using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class UpdateStudentCommandValidator : AbstractValidator<UpdateStudentCommand>
{
    public UpdateStudentCommandValidator(IValidator<UpdateStudent> updateTutorValidator)
    {
        RuleFor(command => command.StudentId).NotEmpty();
        RuleFor(command => command.Student).SetValidator(updateTutorValidator);
    }
}