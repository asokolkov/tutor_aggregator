using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

using Models;

internal sealed class V1ContactDto
{
    [JsonPropertyName("type")]
    public ContactType Type { get; init; }

    [JsonPropertyName("value")]
    public string Value { get; init; }
}