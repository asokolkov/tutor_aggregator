using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1JobDto
{
    [JsonPropertyName("place")]
    public string Place { get; init; }

    [JsonPropertyName("post")]
    public string Post { get; init; }
}