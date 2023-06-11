using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutorLessonsByIdQuery;

internal sealed class GetTutorLessonsByIdQueryHandler : IRequestHandler<GetTutorLessonsByIdQuery, ICollection<Lesson>>
{
    private readonly ILessonsRepository repository;

    public GetTutorLessonsByIdQueryHandler(ILessonsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<ICollection<Lesson>> Handle(GetTutorLessonsByIdQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetTutorLessonsAsync(request.TutorId, request.DateTime);
    }
}