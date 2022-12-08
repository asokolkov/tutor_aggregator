﻿using SPA.Models;

namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

internal sealed class V1TutorDto
{
    [JsonPropertyName("firstName")]
    public string FirstName { get; set; }

    [JsonPropertyName("lastName")]
    public string LastName { get; set; }

    [JsonPropertyName("middleName")]
    public string MiddleName { get; set; }

    [JsonPropertyName("location")]
    public Location Location { get; set; }

    [JsonPropertyName("requirements")]
    public string Requirements { get; set; }

    [JsonPropertyName("rating")]
    public double Rating { get; set; }

    [JsonPropertyName("avatar")]
    public Uri Avatar { get; set; }

    [JsonPropertyName("subjects")]
    public IReadOnlyCollection<Subject> Subjects { get; set; } = Array.Empty<Subject>();

    [JsonPropertyName("contacts")]
    public IReadOnlyCollection<V1ContactDto> Contacts { get; set; } = Array.Empty<V1ContactDto>();

    [JsonPropertyName("educations")]
    public IReadOnlyCollection<V1EducationDto> Educations { get; set; } = Array.Empty<V1EducationDto>();

    [JsonPropertyName("awards")]
    public IReadOnlyCollection<V1AwardDto> Awards { get; set; } = Array.Empty<V1AwardDto>();
}