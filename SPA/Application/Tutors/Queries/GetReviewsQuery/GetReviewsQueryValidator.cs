namespace SPA.Application.Tutors.Queries.GetReviewsQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetReviewsQueryValidator : AbstractValidator<GetReviewsQuery>
{
    public GetReviewsQueryValidator()
    {
        RuleFor(query => query.TutorId).NotEmpty();
        RuleFor(query => query.PageNumber).Must(pageNumber => pageNumber >= 0);
        RuleFor(query => query.PageSize).Must(pageSize => pageSize > 0);
    }
}