using Newtonsoft.Json;

namespace SPA.V1.DataModels;

using Domain;

public sealed class V1LessonDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("price")]
    public double Price { get; init; }
    
    [JsonProperty("status")]
    public LessonStatus Status { get; init; }
    
    [JsonProperty("start")]
    public DateTimeOffset Start { get; init; }
    
    [JsonProperty("end")]
    public DateTimeOffset End { get; init; }

    [JsonProperty("tutor")]
    public V1TutorInfoDto Tutor { get; init; }
    
    [JsonProperty("student")]
    public V1StudentInfoDto Student { get; init; }
}