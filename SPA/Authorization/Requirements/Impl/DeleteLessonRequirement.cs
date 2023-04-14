using JetBrains.Annotations;
using SPA.Domain;

namespace SPA.Authorization.Requirements.Impl;

[UsedImplicitly]
internal sealed class DeleteLessonRequirement : IDeleteLessonRequirement
{
    public bool IsUserAuthorized(Lesson lesson, Guid userId)
    {
        return lesson.Tutor.Id == userId;
    }
}