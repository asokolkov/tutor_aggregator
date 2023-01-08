using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1LessonDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("price")]
    public double Price { get; init; }
    
    [JsonPropertyName("confirmed")]
    public bool Confirmed { get; init; }
    
    [JsonPropertyName("startTime")]
    public DateTimeOffset StartTime { get; init; }
    
    [JsonPropertyName("endTime")]
    public DateTimeOffset EndTime { get; init; }
}