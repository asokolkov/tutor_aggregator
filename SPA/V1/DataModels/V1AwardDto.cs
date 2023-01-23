using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1AwardDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("description")]
    public string Description { get; init; }
    
    [JsonProperty("year")]
    public int Year { get; init; }
}