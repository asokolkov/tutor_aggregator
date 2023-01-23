namespace SPA.Authorization.Requirements;

using Domain;
using Identity.Models;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class CreateLessonRequirement : ICreateLessonRequirement
{
    public bool IsUserAuthorized(User user)
    {
        return user.AccountType == AccountType.Tutor;
    }
}