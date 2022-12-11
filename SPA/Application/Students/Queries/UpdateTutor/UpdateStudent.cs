using MediatR;
using SPA.Models;
using SPA.V1.DataModels;

namespace SPA.Application.Students.Queries.UpdateTutor;

public class UpdateStudent : IRequest<V1StudentDto>
{
    public V1StudentDto Element { get; }
    
    public UpdateStudent(V1StudentDto element)
    {
        Element = element;
    }
}