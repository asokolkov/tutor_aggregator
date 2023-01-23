using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1LocationDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("city")]
    public string City { get; init; }
    
    [JsonProperty("district")]
    public string District { get; init; }
}