namespace SPA.Authorization.Requirements;

using Domain;
using Microsoft.AspNetCore.Authorization;

public interface IDeleteLessonRequirement : IAuthorizationRequirement
{
    bool IsUserAuthorized(Lesson lesson, Guid userId);
}