using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1SubjectDto
{
    [JsonPropertyName("description")]
    public string Description { get; init; }
}