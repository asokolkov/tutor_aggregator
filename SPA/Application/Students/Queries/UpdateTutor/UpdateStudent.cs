using MediatR;
using SPA.Models;

namespace SPA.Application.Students.Queries.UpdateTutor;

public class UpdateStudent : IRequest<Student>
{
    public Student Element { get; }
    
    public UpdateStudent(Student element)
    {
        Element = element;
    }
}