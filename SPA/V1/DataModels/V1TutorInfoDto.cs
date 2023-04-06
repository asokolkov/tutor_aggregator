using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public class V1TutorInfoDto
{
    [JsonProperty("id")] 
    public Guid Id { get; init; }

    [JsonProperty("firstName")] 
    public string FirstName { get; init; }

    [JsonProperty("lastName")] 
    public string LastName { get; init; }

    [JsonProperty("rating")] 
    public double Rating { get; init; }
}