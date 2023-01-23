using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1UpdateTutorDto
{
    [JsonProperty("firstName")]
    public string FirstName { get; init; }

    [JsonProperty("lastName")]
    public string LastName { get; init; }

    [JsonProperty("requirements")]
    public string Requirements { get; init; }

    [JsonProperty("location")]
    public V1LocationDto Location { get; init; }

    [JsonProperty("job")]
    public V1JobDto Job { get; init; }

    [JsonProperty("subjects")]
    public ICollection<V1SubjectDto> Subjects { get; init; }

    [JsonProperty("contacts")]
    public ICollection<V1TutorContactDto> Contacts { get; init; }

    [JsonProperty("educations")]
    public ICollection<V1EducationDto> Educations { get; init; }

    [JsonProperty("awards")]
    public ICollection<V1AwardDto> Awards { get; init; }
}