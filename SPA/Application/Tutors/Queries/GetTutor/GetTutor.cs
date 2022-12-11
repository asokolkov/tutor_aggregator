using MediatR;
using SPA.Models;

namespace SPA.Application.Tutors.Queries.GetTutor;

public class GetTutor : IRequest<Tutor>
{
    public int Id { get; }
    
    public GetTutor(int id)
    {
        Id = id;
    }
}