using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1LocationDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("city")]
    public string City { get; init; }
    
    [JsonPropertyName("district")]
    public string District { get; init; }
}