using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public class V1StudentContactDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("type")]
    public V1ContactTypeDto Type { get; init; }
    
    [JsonProperty("value")]
    public string Value { get; init; }
}