using MediatR;
using SPA.Models;

namespace SPA.Application.Lessons.Queries.UpdateLesson;

public class UpdateLesson : IRequest<Lesson>
{
    public Lesson Element { get; }
    
    public UpdateLesson(Lesson element)
    {
        Element = element;
    }
}