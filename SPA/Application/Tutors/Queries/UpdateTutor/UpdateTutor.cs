using MediatR;
using SPA.Models;

namespace SPA.Application.Tutors.Queries.UpdateTutor;

public class UpdateTutor : IRequest<Tutor>
{
    public Tutor Element { get; }
    
    public UpdateTutor(Tutor element)
    {
        Element = element;
    }
}