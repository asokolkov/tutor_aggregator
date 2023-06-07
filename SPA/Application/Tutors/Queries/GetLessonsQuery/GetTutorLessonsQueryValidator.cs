namespace SPA.Application.Tutors.Queries.GetLessonsQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetTutorLessonsQueryValidator : AbstractValidator<GetTutorLessonsQuery>
{
    public GetTutorLessonsQueryValidator()
    {
        RuleFor(query => query.TutorId);
    }
}