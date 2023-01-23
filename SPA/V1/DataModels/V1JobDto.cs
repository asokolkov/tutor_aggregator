using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1JobDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("place")]
    public string Place { get; init; }

    [JsonProperty("post")]
    public string Post { get; init; }
}