namespace SPA.Authorization.Requirements;

using Domain;
using Identity.Models;

internal sealed class CreateReviewRequirement : ICreateReviewRequirement
{
    public bool IsUserAuthorized(User user)
    {
        return user.AccountType == AccountType.Student;
    }
}