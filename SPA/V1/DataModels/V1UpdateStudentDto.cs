namespace SPA.V1.DataModels;

using Newtonsoft.Json;

public sealed class V1UpdateStudentDto
{
    [JsonProperty("firstName")]
    public string FirstName { get; init; }

    [JsonProperty("lastName")]
    public string LastName { get; init; }

    [JsonProperty("contacts")]
    public ICollection<V1StudentContactDto> Contacts { get; init; }
}