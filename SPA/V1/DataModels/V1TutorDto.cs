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
    
    [JsonProperty("location")]
    public V1LocationDto Location { get; init; }
    
    [JsonProperty("job")]
    public string Job { get; init; }

    [JsonProperty("contacts")]
    public string Contacts { get; init; }

    [JsonProperty("educations")]
    public string Educations { get; init; }
    
    [JsonProperty("awards")]
    public string Awards { get; init; }
    
    [JsonProperty("description")]
    public string Description { get; init; }
    
    [JsonProperty("subjects")]
    public IReadOnlyCollection<V1SubjectDto> Subjects { get; init; }
}