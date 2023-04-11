using EFCore.Postgres.Identity.Models;
using SPA.Domain;

namespace SPA.Authorization.Requirements.Impl;

internal sealed class CreateReviewRequirement : ICreateReviewRequirement
{
    public bool IsUserAuthorized(User user)
    {
        return user.AccountType == AccountType.Student;
    }
}