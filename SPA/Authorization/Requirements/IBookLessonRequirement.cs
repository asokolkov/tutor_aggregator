namespace SPA.Authorization.Requirements;

using Domain;
using Microsoft.AspNetCore.Authorization;

public interface IBookLessonRequirement : IAuthorizationRequirement
{
    bool IsUserAuthorized(User user);
}