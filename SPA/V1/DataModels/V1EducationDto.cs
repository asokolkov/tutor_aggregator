namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

internal sealed class V1EducationDto
{
    [JsonPropertyName("description")]
    public string Description { get; set; }
    
    [JsonPropertyName("beginYear")]
    public int BeginYear { get; set; }
    
    [JsonPropertyName("graduationYear")]
    public int GraduationYear { get; set; }
}