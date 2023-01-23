namespace SPA.Authorization.Requirements;

using Domain;
using Microsoft.AspNetCore.Authorization;

public interface ICancelLessonRequirement : IAuthorizationRequirement
{
    bool IsUserAuthorized(Lesson lesson, Guid userId);
}