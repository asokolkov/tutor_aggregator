namespace SPA.Domain;

public sealed class Page<T>
{
    public ICollection<T> Items { get; }

    public long TotalCount { get; }
    
    public int LastPage { get; }

    public int CurrentPage { get; }
    
    public int Size { get; }
    
    public bool HasPrevious { get; }
    
    public bool HasNext { get; }

    public Page(ICollection<T> items, long totalCount, int currentPage, int size)
    {
        Items = items;
        TotalCount = totalCount;
        Size = size;
        CurrentPage = currentPage;
        LastPage = (int)Math.Ceiling(totalCount / (double)size) - 1;
        HasPrevious = 0 < currentPage && currentPage <= LastPage + 1;
        HasNext = currentPage < LastPage;
    }
}