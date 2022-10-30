namespace SPA.Repositories;

using Models;

public interface ICrudRepository<T>
{
    Task<Page<T>> Get();
    Task<Page<T>> Get(long page, long size);
}