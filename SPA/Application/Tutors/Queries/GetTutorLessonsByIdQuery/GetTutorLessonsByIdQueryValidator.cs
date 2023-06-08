using FluentValidation;
using JetBrains.Annotations;

namespace SPA.Application.Tutors.Queries.GetTutorLessonsByIdQuery;

[UsedImplicitly]
internal sealed class GetTutorLessonsByIdQueryValidator : AbstractValidator<GetTutorLessonsByIdQuery>
{
    public GetTutorLessonsByIdQueryValidator()
    {
        RuleFor(query => query.TutorId);
    }
}