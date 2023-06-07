namespace SPA.Application.Tutors.Queries.GetTutorsQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetTutorsQueryValidator : AbstractValidator<GetTutorsQuery>
{
    public GetTutorsQueryValidator()
    {
        RuleFor(query => query.PageNumber).Must(pageNumber => pageNumber >= 0);
        RuleFor(query => query.PageSize).Must(pageSize => pageSize > 0);
    }
}