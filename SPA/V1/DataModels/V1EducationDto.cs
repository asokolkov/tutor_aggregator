namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

public sealed class V1EducationDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("description")]
    public string Description { get; init; }
    
    [JsonPropertyName("beginYear")]
    public int BeginYear { get; init; }
    
    [JsonPropertyName("graduationYear")]
    public int GraduationYear { get; init; }
}