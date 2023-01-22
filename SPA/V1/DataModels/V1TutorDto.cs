namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

public sealed class V1TutorDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("firstName")]
    public string FirstName { get; init; }

    [JsonPropertyName("lastName")]
    public string LastName { get; init; }

    [JsonPropertyName("requirements")]
    public string Requirements { get; init; }

    [JsonPropertyName("rating")]
    public double Rating { get; init; }

    [JsonPropertyName("avatar")]
    public Uri Avatar { get; init; }
    
    [JsonPropertyName("location")]
    public V1LocationDto Location { get; init; }
    
    [JsonPropertyName("job")]
    public string Job { get; init; }
    
    [JsonPropertyName("contacts")]
    public string Contacts { get; init; }

    [JsonPropertyName("educations")]
    public string Educations { get; init; }

    [JsonPropertyName("awards")]
    public string Awards { get; init; }

    [JsonPropertyName("subjects")]
    public IReadOnlyCollection<V1SubjectDto> Subjects { get; init; }

    [JsonPropertyName("lessons")]
    public IReadOnlyCollection<V1LessonDto> Lessons { get; init; }
}