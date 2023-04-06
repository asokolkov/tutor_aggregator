using EFCore.Postgres.Identity.Models;
using JetBrains.Annotations;
using SPA.Domain;

namespace SPA.Authorization.Requirements;

[UsedImplicitly]
internal sealed class GetLessonsesRequirement : IGetLessonsRequirement
{
    public bool IsUserAuthorized(User user)
    {
        return user.AccountType is AccountType.Tutor or AccountType.Student;
    }
}