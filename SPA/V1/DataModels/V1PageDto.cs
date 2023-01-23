using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1PageDto<T>
{
    public V1PageDto(ICollection<T> items, long totalCount)
    {
        Items = items;
        TotalCount = totalCount;
    }

    [JsonProperty("items")] public ICollection<T> Items { get; }

    [JsonProperty("totalCount")] public long TotalCount { get; }
}