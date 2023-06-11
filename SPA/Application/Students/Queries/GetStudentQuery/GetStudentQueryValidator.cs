namespace SPA.Application.Students.Queries.GetStudentQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetStudentQueryValidator : AbstractValidator<GetStudentQuery>
{
    public GetStudentQueryValidator()
    {
        RuleFor(query => query.Id).NotEmpty();
    }
}