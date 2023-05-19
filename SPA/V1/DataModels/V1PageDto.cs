using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1PageDto<T>
{
    [JsonProperty("items")]
    public ICollection<T> Items { get; }

    [JsonProperty("totalCount")]
    public long TotalCount { get; }
    
    [JsonProperty("lastPage")] 
    public int LastPage { get; }

    [JsonProperty("currentPage")] 
    public int CurrentPage { get; }
    
    [JsonProperty("size")] 
    public int Size { get; }
    
    [JsonProperty("hasPrevious")]
    public bool HasPrevious { get; }
    
    [JsonProperty("hasNext")]
    public bool HasNext { get; }
    
    public V1PageDto(ICollection<T> items, long totalCount, int currentPage, int size)
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