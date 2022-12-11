namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

internal sealed class V1EducationDto
{
    [JsonPropertyName("description")]
    public string Description { get; init; }
    
    [JsonPropertyName("beginYear")]
    public int BeginYear { get; init; }
    
    [JsonPropertyName("graduationYear")]
    public int GraduationYear { get; init; }
}