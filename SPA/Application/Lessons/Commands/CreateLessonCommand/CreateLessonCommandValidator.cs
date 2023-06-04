namespace SPA.Application.Lessons.Commands.CreateLessonCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class CreateLessonCommandValidator : AbstractValidator<CreateLessonCommand>
{
    public CreateLessonCommandValidator()
    {
        RuleFor(command => command.TutorId).NotEmpty();
        RuleFor(command => command.Type).IsInEnum();
    }
}