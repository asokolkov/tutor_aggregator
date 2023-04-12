using JetBrains.Annotations;
using SPA.Domain;

namespace SPA.Authorization.Requirements.Impl;

[UsedImplicitly]
internal sealed class CancelLessonRequirement : ICancelLessonRequirement
{
    public bool IsUserAuthorized(Lesson lesson, Guid userId)
    {
        return lesson.Student.Id == userId;
    }
}