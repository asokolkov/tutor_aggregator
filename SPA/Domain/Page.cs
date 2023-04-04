namespace SPA.Domain;

public sealed class Page<T>
{
    public ICollection<T> Items { get; }
    
    public long TotalCount { get; }
    
    public Page(ICollection<T> items, int totalCount)
    {
        Items = items;
        TotalCount = totalCount;
    }
}