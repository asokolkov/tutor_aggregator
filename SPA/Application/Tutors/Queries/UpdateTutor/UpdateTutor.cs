using MediatR;
using SPA.Models;
using SPA.V1.DataModels;

namespace SPA.Application.Tutors.Queries.UpdateTutor;

public class UpdateTutor : IRequest<V1TutorDto>
{
    public V1TutorDto Element { get; }
    
    public UpdateTutor(V1TutorDto element)
    {
        Element = element;
    }
}