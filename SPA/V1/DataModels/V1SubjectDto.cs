using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

internal sealed class V1SubjectDto
{
    [JsonPropertyName("description")]
    public string Description { get; init; }
}