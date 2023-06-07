namespace SPA.Application.Tutors.Queries.GetTutorQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetTutorQueryValidator : AbstractValidator<GetTutorQuery>
{
    public GetTutorQueryValidator()
    {
        RuleFor(query => query.Id).NotEmpty();
    }
}