namespace SPA.Application.Students.Queries.GetStudentsQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetStudentsQueryValidator : AbstractValidator<GetStudentsQuery>
{
    public GetStudentsQueryValidator()
    {
        RuleFor(query => query.PageNumber).Must(pageNumber => pageNumber >= 0);
        RuleFor(query => query.PageSize).Must(pageSize => pageSize > 0);
    }
}