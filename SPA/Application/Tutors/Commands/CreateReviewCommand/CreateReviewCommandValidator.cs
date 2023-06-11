namespace SPA.Application.Tutors.Commands.CreateReviewCommand;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class CreateReviewCommandValidator : AbstractValidator<CreateReviewCommand>
{
    public CreateReviewCommandValidator()
    {
        RuleFor(command => command.StudentId).NotEmpty();
        RuleFor(command => command.TutorId).NotEmpty();
    }
}