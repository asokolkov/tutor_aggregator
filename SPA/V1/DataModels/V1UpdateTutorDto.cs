using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1UpdateTutorDto
{
    [JsonProperty("firstName")]
    public string FirstName { get; init; }

    [JsonProperty("lastName")]
    public string LastName { get; init; }
    
    [JsonProperty("age")]
    public int Age { get; init; }

    [JsonProperty("location")]
    public V1LocationDto Location { get; init; }

    [JsonProperty("job")]
    public string Job { get; init; }

    [JsonProperty("description")]
    public string Description { get; init; }
    
    [JsonProperty("educations")]
    public IReadOnlyCollection<V1TutorEducationDto> Educations { get; init; }
    
    [JsonProperty("awards")]
    public IReadOnlyCollection<V1AwardDto> Awards { get; init; }
    
    [JsonProperty("requirements")]
    public IReadOnlyCollection<V1RequirementDto> Requirements { get; init; }
    
    [JsonProperty("subjects")]
    public ICollection<V1SubjectDto> Subjects { get; init; }
    
    [JsonProperty("contacts")]
    public ICollection<V1TutorContactDto> Contacts { get; init; }
}