using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1ReviewDto
{
    [JsonPropertyName("rating")]
    public double Rating { get; init; }
    
    [JsonPropertyName("description")]
    public string Description { get; init; }
}