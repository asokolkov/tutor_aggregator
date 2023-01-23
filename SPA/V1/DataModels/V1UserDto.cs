using Newtonsoft.Json;

namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;
using Identity.Models;
using JetBrains.Annotations;

[PublicAPI]
public sealed class V1UserDto
{
    [JsonProperty("id")] public Guid Id { get; init; }
    
    [JsonProperty("firstName")] public string FirstName { get; init; }

    [JsonProperty("lastName")] public string LastName { get; init; }
    
    [JsonProperty("accounType")] public AccountType? AccountType { get; init; }

    [JsonProperty("registrationCompleted")]
    public bool RegistrationCompleted { get; init; }
}