using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1JobDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("place")]
    public string Place { get; init; }

    [JsonPropertyName("post")]
    public string Post { get; init; }
}