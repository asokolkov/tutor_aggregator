namespace SPA.V1.DataModels;

using Newtonsoft.Json;

public sealed class V1UpdateStudentDto
{
    [JsonProperty("firstName")]
    public string FirstName { get; init; }

    [JsonProperty("lastName")]
    public string LastName { get; init; }
    
    [JsonProperty("age")]
    public int Age { get; init; }

    [JsonProperty("contacts")]
    public string Contacts { get; init; }
    
    [JsonProperty("description")]
    public string Description { get; init; }
}