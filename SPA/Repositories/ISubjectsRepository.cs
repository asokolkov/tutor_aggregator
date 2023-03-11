using SPA.Domain;

namespace SPA.Repositories;

internal interface ISubjectsRepository
{
    Task<List<Subject>> GetAsync();
    
    Task<Subject> GetAsync(Guid id);

    Task<Subject> InsertAsync(Subject subject);
}