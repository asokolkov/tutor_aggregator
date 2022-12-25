namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

public sealed class V1AwardDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("description")]
    public string Description { get; init; }
    
    [JsonPropertyName("year")]
    public int Year { get; init; }
}