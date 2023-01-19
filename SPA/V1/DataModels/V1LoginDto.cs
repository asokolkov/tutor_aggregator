namespace SPA.V1.DataModels;

using Newtonsoft.Json;

public sealed record V1LoginDto(
    [JsonProperty("email")] string Email, 
    [JsonProperty("password")] string Password, 
    [JsonProperty("rememberMe")] bool RememberMe);