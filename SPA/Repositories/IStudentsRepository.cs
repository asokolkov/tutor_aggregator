#nullable enable

namespace SPA.Repositories;

using Domain;

public interface IStudentsRepository
{
    Task<Student?> GetAsync(Guid id);
    Task<Page<Student>> GetPageAsync(int page, int size);
    Task<Student?> InsertAsync(Student tutor);
    Task<Student?> UpdateAsync(Guid id, UpdateStudent student);
}