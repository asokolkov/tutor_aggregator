using Newtonsoft.Json;

namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

public sealed class V1EducationDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("description")]
    public string Description { get; init; }

    [JsonProperty("graduationYear")]
    public int GraduationYear { get; init; }
}