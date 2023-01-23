namespace SPA.Authorization.Requirements;

using Domain;
using Identity.Models;

internal sealed class BookLessonRequirement : IBookLessonRequirement
{
    public bool IsUserAuthorized(User user)
    {
        return user.AccountType == AccountType.Student;
    }
}