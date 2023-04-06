using Microsoft.AspNetCore.Authorization;
using SPA.Domain;

namespace SPA.Authorization.Requirements;

internal interface IGetLessonsRequirement : IAuthorizationRequirement
{
    bool IsUserAuthorized(User user);
}