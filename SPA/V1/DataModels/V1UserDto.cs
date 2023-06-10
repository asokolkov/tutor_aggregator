﻿using EFCore.Postgres.Identity.Models;
using Newtonsoft.Json;

namespace SPA.V1.DataModels;

using JetBrains.Annotations;

[PublicAPI]
public sealed class V1UserDto
{
    [JsonProperty("id")] public Guid Id { get; init; }

    [JsonProperty("firstName")] public string FirstName { get; init; }

    [JsonProperty("lastName")] public string LastName { get; init; }

    [JsonProperty("phone")] public string Phone { get; init; }

    [JsonProperty("email")] public string Email { get; init; }

    [JsonProperty("accountType")] public AccountType? AccountType { get; init; }

    [JsonProperty("registrationCompleted")]
    public bool RegistrationCompleted { get; init; }

    [JsonProperty("avatar")] public Uri Avatar { get; init; }
}