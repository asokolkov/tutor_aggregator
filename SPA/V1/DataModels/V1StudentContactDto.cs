using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

using Entities;

public sealed class V1StudentContactDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("type")]
    public V1ContactTypeDto Type { get; init; }

    [JsonPropertyName("value")]
    public string Value { get; init; }
}