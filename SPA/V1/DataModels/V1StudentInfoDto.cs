using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1StudentInfoDto
{
    [JsonProperty("id")] public Guid Id { get; init; }

    [JsonProperty("firstName")] public string FirstName { get; init; }

    [JsonProperty("lastName")] public string LastName { get; init; }
}