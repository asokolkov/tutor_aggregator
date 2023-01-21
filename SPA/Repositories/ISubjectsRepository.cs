using SPA.Domain;
using SPA.Entities;

namespace SPA.Repositories;

internal interface ISubjectsRepository
{
    Task<List<Subject>> GetAsync();
    
    Task<Subject> GetAsync(Guid id);

    Task<Subject> InsertAsync(Subject subject);
}