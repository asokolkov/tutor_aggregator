using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public class V1TutorEducationDto
{
    [JsonProperty("id")]
    public string Id { get; init; }

    [JsonProperty("value")]
    public string Value { get; init; }
}