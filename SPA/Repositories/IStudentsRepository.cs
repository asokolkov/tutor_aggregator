namespace SPA.Repositories;

using Domain;
using Entities;

internal interface IStudentsRepository
{
    Task<Page<Student>> Get(int page, int size);
    
    Task<Student> Get(Guid id);

    Task<Student> Update(Guid id, UpdateStudent student);
    
    Task<Student> Insert(Student tutor);
}