using MediatR;
using SPA.Models;

namespace SPA.Application.Students.Queries.GetStudent;

public class GetStudent : IRequest<Student>
{
    public int Id { get; }
    
    public GetStudent(int id)
    {
        Id = id;
    }
}