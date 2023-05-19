using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1PageDto<T>
{
    [JsonProperty("items")] 
    public ICollection<T> Items { get; }

    [JsonProperty("totalCount")] 
    public long TotalCount { get; }
    
    [JsonProperty("hasPrevious")] 
    public bool HasPrevious { get; }
    
    [JsonProperty("hasNext")] 
    public bool HasNext { get; }
    
    public V1PageDto(ICollection<T> items, long totalCount, bool hasPrevious, bool hasNext)
    {
        Items = items;
        TotalCount = totalCount;
        HasPrevious = hasPrevious;
        HasNext = hasNext;
    }
}