using FluentValidation;
using JetBrains.Annotations;

namespace SPA.Application.Tutors.Queries.GetTutorLessonsQuery;

[UsedImplicitly]
internal sealed class GetTutorLessonsQueryValidator : AbstractValidator<GetTutorLessonsQuery>
{
    public GetTutorLessonsQueryValidator()
    {
        RuleFor(query => query.TutorId).NotEmpty();
    }
}