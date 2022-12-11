using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

internal sealed class V1ReviewDto
{
    [JsonPropertyName("rating")]
    public double Rating { get; init; }
    
    [JsonPropertyName("description")]
    public string Description { get; init; }
    
    [JsonPropertyName("modificationTime")]
    public DateTimeOffset ModificationTime { get; init; }
}