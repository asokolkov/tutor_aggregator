namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

public sealed class V1UpdateTutorDto
{
    [JsonPropertyName("firstName")]
    public string FirstName { get; init; }

    [JsonPropertyName("lastName")]
    public string LastName { get; init; }

    [JsonPropertyName("requirements")]
    public string Requirements { get; init; }

    [JsonPropertyName("location")]
    public V1LocationDto Location { get; init; }

    [JsonPropertyName("job")]
    public V1JobDto Job { get; init; }

    [JsonPropertyName("subjects")]
    public ICollection<V1SubjectDto> Subjects { get; init; }

    [JsonPropertyName("contacts")]
    public ICollection<V1TutorContactDto> Contacts { get; init; }

    [JsonPropertyName("educations")]
    public ICollection<V1EducationDto> Educations { get; init; }

    [JsonPropertyName("awards")]
    public ICollection<V1AwardDto> Awards { get; init; }
}