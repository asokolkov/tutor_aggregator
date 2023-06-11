using SPA.Domain;

namespace SPA.Repositories;

internal interface ISubjectsRepository
{
    Task<Subject> GetAsync(Guid id);
    Task<List<Subject>> GetAsync();
    Task<Subject> InsertAsync(Subject subject);
}