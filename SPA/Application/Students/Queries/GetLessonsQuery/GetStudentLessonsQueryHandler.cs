using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.GetLessonsQuery;

internal sealed class GetStudentLessonsQueryHandler : IRequestHandler<GetStudentLessonsQuery, ICollection<Lesson>>
{
    private readonly ILessonRepository repository;

    public GetStudentLessonsQueryHandler(ILessonRepository repository)
    {
        this.repository = repository;
    }

    public async Task<ICollection<Lesson>> Handle(GetStudentLessonsQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetStudentLessonsAsync(request.StudentId);
    }
}