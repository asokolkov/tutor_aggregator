namespace SPA.Application.Users.Queries.GetCurrentUserQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetUserQueryValidator : AbstractValidator<GetUserQuery>
{
    public GetUserQueryValidator()
    {
        RuleFor(query => query.Id).NotEmpty();
    }
}