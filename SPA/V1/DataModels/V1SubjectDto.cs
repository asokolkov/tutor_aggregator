using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1SubjectDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("description")]
    public string Description { get; init; }
}