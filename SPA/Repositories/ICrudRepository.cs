using Microsoft.AspNetCore.JsonPatch;

namespace SPA.Repositories;

using Models;

public interface ICrudRepository<T>
{
    Task<Page<T>> Get();
    Task<Page<T>> Get(long page, long size);
    Task<Tutor> Get(int id);
    void Update(int id, JsonPatchDocument document);
    void Insert(T tutor);
}