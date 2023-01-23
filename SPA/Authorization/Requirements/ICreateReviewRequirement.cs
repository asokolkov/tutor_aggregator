namespace SPA.Authorization.Requirements;

using Domain;
using Microsoft.AspNetCore.Authorization;

internal interface ICreateReviewRequirement : IAuthorizationRequirement
{
    bool IsUserAuthorized(User user);
}