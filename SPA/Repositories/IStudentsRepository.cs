namespace SPA.Repositories;

using Domain;

internal interface IStudentsRepository
{
    Task<Page<Student>> GetAsync(int page, int size);
    
    Task<Student> GetAsync(Guid id);

    Task<Student> Update(Guid id, UpdateStudent student);
    
    Task<Student> Insert(Student tutor);
}