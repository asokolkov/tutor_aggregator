﻿using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1LocationDto
{
    [JsonPropertyName("city")]
    public string City { get; init; }
    
    [JsonPropertyName("district")]
    public string District { get; init; }
}