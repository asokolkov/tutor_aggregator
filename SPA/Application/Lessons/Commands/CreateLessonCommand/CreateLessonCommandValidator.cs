namespace SPA.Application.Lessons.Commands.CreateLessonCommand;

using FluentValidation;
using JetBrains.Annotations;
using Microsoft.Extensions.Internal;

[UsedImplicitly]
internal sealed class CreateLessonCommandValidator : AbstractValidator<CreateLessonCommand>
{
    public CreateLessonCommandValidator(ISystemClock systemClock)
    {
        var now = systemClock.UtcNow;
        RuleFor(command => command.TutorId).NotEmpty();
        RuleFor(command => command.Type).IsInEnum();
        RuleFor(command => command.Start)
            .Must(start => start > now)
            .WithMessage("Дата начала должна быть больше текущего времени");
        RuleFor(command => command.End)
            .Must(end => end > now)
            .WithMessage("Дата конца должна быть больше текущего времени");
        RuleFor(command => command)
            .Must(command => command.Start < command.End)
            .WithMessage("Дата начала должна быть меньше даты конца");
    }
}