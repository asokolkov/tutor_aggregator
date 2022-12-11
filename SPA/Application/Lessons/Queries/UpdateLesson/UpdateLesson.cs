using MediatR;
using SPA.Models;
using SPA.V1.DataModels;

namespace SPA.Application.Lessons.Queries.UpdateLesson;

public class UpdateLesson : IRequest<V1LessonDto>
{
    public V1LessonDto Element { get; }
    
    public UpdateLesson(V1LessonDto element)
    {
        Element = element;
    }
}