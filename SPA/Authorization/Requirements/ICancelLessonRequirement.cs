using Microsoft.AspNetCore.Authorization;
using SPA.Domain;

namespace SPA.Authorization.Requirements;

public interface ICancelLessonRequirement : IAuthorizationRequirement
{
    bool IsUserAuthorized(Lesson lesson, Guid userId);
}