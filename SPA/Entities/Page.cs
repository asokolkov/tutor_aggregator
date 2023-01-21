namespace SPA.Entities;

internal sealed class Page<T>
{
    public ICollection<T> Items { get; }
    
    public long TotalCount { get; }
    
    public Page(ICollection<T> items)
    {
        Items = items;
        TotalCount = items.Count;
    }
}