namespace SPA.Authorization.Requirements;

using Domain;
using Microsoft.AspNetCore.Authorization;

public interface ICreateLessonRequirement : IAuthorizationRequirement
{
    bool IsUserAuthorized(User user);
}