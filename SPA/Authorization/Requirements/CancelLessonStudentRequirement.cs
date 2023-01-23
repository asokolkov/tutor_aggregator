namespace SPA.Authorization.Requirements;

using Domain;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class CancelLessonStudentRequirement : ICancelLessonRequirement
{
    public bool IsUserAuthorized(Lesson lesson, Guid userId)
    {
        return lesson.Student.Id == userId;
    }
}