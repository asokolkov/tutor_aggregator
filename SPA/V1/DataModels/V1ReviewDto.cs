using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1ReviewDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("rating")]
    public double Rating { get; init; }
    
    [JsonPropertyName("description")]
    public string Description { get; init; }
    
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset UpdatedAt { get; init; }
}