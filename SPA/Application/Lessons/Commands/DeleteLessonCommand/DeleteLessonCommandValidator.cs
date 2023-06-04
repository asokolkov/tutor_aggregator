namespace SPA.Application.Lessons.Commands.DeleteLessonCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class DeleteLessonCommandValidator : AbstractValidator<DeleteLessonCommand>
{
    public DeleteLessonCommandValidator()
    {
        RuleFor(command => command.Id).NotEmpty();
    }
}