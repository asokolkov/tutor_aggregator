using MediatR;
using SPA.Domain;
using SPA.Repositories;

namespace SPA.Application.Tutors.Queries.GetTutorLessonsQuery;

internal sealed class GetTutorLessonsQueryHandler : IRequestHandler<GetTutorLessonsQuery, ICollection<Lesson>>
{
    private readonly ILessonsRepository repository;

    public GetTutorLessonsQueryHandler(ILessonsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<ICollection<Lesson>> Handle(GetTutorLessonsQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetTutorLessonsAsync(request.TutorId);
    }
}