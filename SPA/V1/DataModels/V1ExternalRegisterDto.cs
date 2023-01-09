namespace SPA.V1.DataModels;

#nullable enable
using Newtonsoft.Json;

public sealed record V1ExternalRegisterDto(
    [JsonProperty("email")] string? Email,
    [JsonProperty("firstName")] string FirstName,
    [JsonProperty("lastName")] string LastName,
    [JsonProperty("phone")] string Phone,
    [JsonProperty("accountType")] AccountType AccountType);