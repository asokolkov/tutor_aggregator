namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;
using Identity.Models;
using JetBrains.Annotations;

[PublicAPI]
public sealed class V1UserDto
{
    [JsonPropertyName("firstName")] public string FirstName { get; init; }

    [JsonPropertyName("lastName")] public string LastName { get; init; }

    [JsonPropertyName("accounType")] public AccountType? AccountType { get; init; }

    [JsonPropertyName("registrationCompleted")]
    public bool RegistrationCompleted { get; init; }
}