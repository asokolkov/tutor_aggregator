using EFCore.Postgres.Identity.Models;
using JetBrains.Annotations;
using SPA.Domain;

namespace SPA.Authorization.Requirements.Impl;

[UsedImplicitly]
internal sealed class CreateLessonRequirement : ICreateLessonRequirement
{
    public bool IsUserAuthorized(User user)
    {
        return user.AccountType == AccountType.Tutor;
    }
}