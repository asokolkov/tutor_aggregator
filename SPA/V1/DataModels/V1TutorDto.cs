using Newtonsoft.Json;

namespace SPA.V1.DataModels;


public sealed class V1TutorDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("firstName")]
    public string FirstName { get; init; }

    [JsonProperty("lastName")]
    public string LastName { get; init; }

    [JsonProperty("requirements")]
    public string Requirements { get; init; }

    [JsonProperty("rating")]
    public double Rating { get; init; }

    [JsonProperty("avatar")]
    public Uri Avatar { get; init; }
    
    [JsonProperty("location")]
    public V1LocationDto Location { get; init; }
    
    [JsonProperty("job")]
    public V1JobDto Job { get; init; }

    [JsonProperty("subjects")]
    public IReadOnlyCollection<V1SubjectDto> Subjects { get; init; }

    [JsonProperty("contacts")]
    public IReadOnlyCollection<V1TutorContactDto> Contacts { get; init; }

    [JsonProperty("educations")]
    public IReadOnlyCollection<V1EducationDto> Educations { get; init; }

    [JsonProperty("awards")]
    public IReadOnlyCollection<V1AwardDto> Awards { get; init; }
}