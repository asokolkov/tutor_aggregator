using EFCore.Postgres.Identity.Models;

namespace SPA.Authorization.Requirements;

using Domain;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class CreateLessonRequirement : ICreateLessonRequirement
{
    public bool IsUserAuthorized(User user)
    {
        return user.AccountType == AccountType.Tutor;
    }
}