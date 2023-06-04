namespace SPA.Application.Students.Commands.UpdateStudentCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class UpdateStudentCommandValidator : AbstractValidator<UpdateStudentCommand>
{
    public UpdateStudentCommandValidator()
    {
        RuleFor(command => command.StudentId).NotEmpty();
        RuleFor(command => command.Student.Age).Must(age => age is > 0 and < 100);
        RuleFor(command => command.Student.LastName).NotEmpty();
        RuleFor(command => command.Student.FirstName).NotEmpty();
    }
}