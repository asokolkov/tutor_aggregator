using EFCore.Postgres.Identity.Models;

namespace SPA.Authorization.Requirements;

using Domain;

internal sealed class BookLessonRequirement : IBookLessonRequirement
{
    public bool IsUserAuthorized(User user)
    {
        return user.AccountType == AccountType.Student;
    }
}