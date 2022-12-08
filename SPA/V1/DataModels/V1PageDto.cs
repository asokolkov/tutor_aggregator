﻿namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

internal sealed class V1PageDto<T>
{
    public V1PageDto(IReadOnlyCollection<T> items, long totalCount)
    {
        Items = items;
        TotalCount = totalCount;
    }
    
    [JsonPropertyName("items")]
    public IReadOnlyCollection<T> Items { get; }
    
    [JsonPropertyName("totalCount")]
    public long TotalCount { get; }
}