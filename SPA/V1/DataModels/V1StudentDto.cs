using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1StudentDto
{
    [JsonProperty("id")]
    public string Id { get; init; }
    
    [JsonProperty("firstName")]
    public string FirstName { get; init; }

    [JsonProperty("lastName")]
    public string LastName { get; init; }
    
    [JsonProperty("age")]
    public int Age { get; init; }

    [JsonProperty("description")]
    public string Description { get; init; }
    
    [JsonProperty("education")]
    public V1StudentEducationDto Education { get; init; }

    [JsonProperty("contacts")]
    public IReadOnlyCollection<V1StudentContactDto> Contacts { get; init; }
}