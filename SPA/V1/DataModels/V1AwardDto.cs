namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

internal sealed class V1AwardDto
{
    [JsonPropertyName("description")]
    public string Description { get; init; }
    
    [JsonPropertyName("year")]
    public int Year { get; init; }
}