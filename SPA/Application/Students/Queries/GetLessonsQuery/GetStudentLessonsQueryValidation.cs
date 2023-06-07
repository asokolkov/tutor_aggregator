namespace SPA.Application.Students.Queries.GetLessonsQuery;

using FluentValidation;
using JetBrains.Annotations;

[UsedImplicitly]
internal sealed class GetStudentLessonsQueryValidation : AbstractValidator<GetStudentLessonsQuery>
{
    public GetStudentLessonsQueryValidation()
    {
        RuleFor(q => q.StudentId).NotEmpty();
    }
}