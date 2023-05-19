namespace SPA.Domain;

public sealed class Page<T>
{
    public ICollection<T> Items { get; }

    public long TotalCount { get; }

    public bool HasPrevious { get; }
    
    public bool HasNext { get; }

    public Page(ICollection<T> items, long totalCount, int currentPage, int size)
    {
        var lastPage = (int)Math.Ceiling(totalCount / (double)size) - 1;
        Items = items;
        TotalCount = totalCount;
        HasPrevious = 0 < currentPage && currentPage <= lastPage + 1;
        HasNext = currentPage < lastPage;
    }
}