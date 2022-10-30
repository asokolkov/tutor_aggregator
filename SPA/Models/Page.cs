namespace SPA.Models;

public sealed class Page<T>
{
    public Page(IReadOnlyCollection<T> items, long totalCount)
    {
        Items = items;
        TotalCount = totalCount;
    }
    
    public IReadOnlyCollection<T> Items { get; }
    public long TotalCount { get; }
}