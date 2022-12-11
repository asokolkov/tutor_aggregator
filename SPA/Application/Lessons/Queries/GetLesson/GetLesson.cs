using MediatR;
using SPA.Models;

namespace SPA.Application.Lessons.Queries.GetLesson;

public class GetLesson : IRequest<Lesson>
{
    public int Id { get; }
    
    public GetLesson(int id)
    {
        Id = id;
    }
}