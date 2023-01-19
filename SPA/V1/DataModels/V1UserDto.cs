namespace SPA.V1.DataModels;

using JetBrains.Annotations;
using Newtonsoft.Json;

[PublicAPI]
public sealed class V1UserDto
{
    [JsonProperty("firstName")] public string FirstName { get; init; }

    [JsonProperty("lastName")] public string LastName { get; init; }

    [JsonProperty("avatar")] public Uri Avatar { get; init; }

    [JsonProperty("accounType")] public AccountType? AccountType { get; init; }

    [JsonProperty("registrationCompleted")]
    public bool RegistrationCompleted { get; init; }
}