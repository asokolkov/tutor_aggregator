using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1ReviewDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("rating")]
    public double Rating { get; init; }
    
    [JsonProperty("description")]
    public string Description { get; init; }
    
    [JsonProperty("student")]
    public string Student { get; init; }
    
    [JsonProperty("updatedAt")]
    public DateTimeOffset UpdatedAt { get; init; }
}