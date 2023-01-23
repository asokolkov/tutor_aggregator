namespace SPA.Authorization.Requirements;

using Domain;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class CancelLessonTutorRequirement : ICancelLessonRequirement
{
    public bool IsUserAuthorized(Lesson lesson, Guid userId)
    {
        return lesson.Tutor.Id == userId;
    }
}