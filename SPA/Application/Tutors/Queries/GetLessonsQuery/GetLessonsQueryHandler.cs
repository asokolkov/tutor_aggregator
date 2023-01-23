using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetLessonsQuery;

internal sealed class GetTutorLessonsQueryHandler : IRequestHandler<GetTutorLessonsQuery, ICollection<Lesson>>
{
    private readonly ILessonRepository repository;

    public GetTutorLessonsQueryHandler(ILessonRepository repository)
    {
        this.repository = repository;
    }

    public async Task<ICollection<Lesson>> Handle(GetTutorLessonsQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetTutorLessonsAsync(request.TutorId);
    }
}