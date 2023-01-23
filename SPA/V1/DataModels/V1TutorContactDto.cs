using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace SPA.V1.DataModels;

using Entities;

public sealed class V1TutorContactDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("type")]
    public V1ContactTypeDto Type { get; init; }

    [JsonProperty("value")]
    public string Value { get; init; }
}