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
    
    [JsonProperty("updatedAt")]
    public DateTimeOffset UpdatedAt { get; init; }
    
    [JsonProperty("studentId")]
    public string StudentId { get; init; }
    
    [JsonProperty("studentAvatar")]
    public Uri StudentAvatar { get; init; }
}