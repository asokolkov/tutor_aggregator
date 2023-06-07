namespace SPA.Application.Avatars.Queries.GetAvatarQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetAvatarQueryValidator : AbstractValidator<GetAvatarQuery>
{
    public GetAvatarQueryValidator()
    {
        RuleFor(query => query.Id).NotEmpty();
    }
}