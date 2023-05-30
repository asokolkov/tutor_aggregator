namespace SPA.Repositories;

using Domain;

public interface IStudentsRepository
{
    Task<Student> GetAsync(Guid id);
    Task<Page<Student>> GetPageAsync(int page, int size);
    Task<Student> Update(Guid id, UpdateStudent student);
    Task<Student> Insert(Student tutor);
}