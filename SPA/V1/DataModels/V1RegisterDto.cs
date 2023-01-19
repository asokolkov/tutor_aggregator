namespace SPA.V1.DataModels;

using Newtonsoft.Json;

public sealed record V1RegisterDto(
    [JsonProperty("email")] string Email,
    [JsonProperty("password")] string Password,
    [JsonProperty("firstName")] string FirstName,
    [JsonProperty("lastName")] string LastName,
    [JsonProperty("phone")] string Phone,
    [JsonProperty("accountType")] V1AccountTypeDto AccountType);