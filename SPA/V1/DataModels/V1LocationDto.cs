using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

internal sealed class V1LocationDto
{
    [JsonPropertyName("city")]
    public string City { get; init; }
    
    [JsonPropertyName("district")]
    public string District { get; init; }
}