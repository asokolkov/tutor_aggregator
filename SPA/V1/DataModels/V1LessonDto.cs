using Newtonsoft.Json;
using SPA.Domain;

namespace SPA.V1.DataModels;

public sealed class V1LessonDto
{
    [JsonProperty("id")] 
    public string Id { get; init; }

    [JsonProperty("price")] 
    public int Price { get; init; }

    [JsonProperty("status")] 
    public LessonStatus Status { get; init; }

    [JsonProperty("type")] 
    public LessonType Type { get; init; }

    [JsonProperty("start")] 
    public DateTimeOffset Start { get; init; }

    [JsonProperty("end")] 
    public DateTimeOffset End { get; init; }

    [JsonProperty("tutor")] 
    public V1TutorInfoDto Tutor { get; init; }

    [JsonProperty("student")] 
    public V1StudentInfoDto Student { get; init; }
}