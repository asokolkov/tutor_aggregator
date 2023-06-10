namespace SPA.Application.Lessons.Commands.BookLessonCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class BookLessonCommandValidator : AbstractValidator<BookLessonCommand>
{
    public BookLessonCommandValidator()
    {
        RuleFor(command => command.LessonId).NotEmpty();
        RuleFor(command => command.StudentId).NotEmpty();
    }
}