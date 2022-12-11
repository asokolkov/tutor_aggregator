using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

using Models;

internal sealed class V1ContactDto
{
    [JsonPropertyName("type")]
    public ContactType Type { get; set; }

    [JsonPropertyName("value")]
    public string Value { get; set; }
}