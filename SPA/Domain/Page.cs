namespace SPA.Domain;

public sealed class Page<T>
{
    public ICollection<T> Items { get; }

    public long TotalCount { get; }
    
    public bool HasPrevious { get; }
    
    public bool HasNext { get; }

    public Page(ICollection<T> items, int totalCount, bool hasPrevious, bool hasNext)
    {
        Items = items;
        TotalCount = totalCount;
        HasPrevious = hasPrevious;
        HasNext = hasNext;
    }
}