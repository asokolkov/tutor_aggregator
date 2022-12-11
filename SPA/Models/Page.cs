namespace SPA.Models;

public sealed class Page<T>
{
    public Page(ICollection<T> items, long totalCount)
    {
        Items = items;
        TotalCount = totalCount;
    }
    
    public ICollection<T> Items { get; }
    public long TotalCount { get; }
}