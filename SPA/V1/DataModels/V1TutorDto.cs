﻿using SPA.Models;

namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

public sealed class V1TutorDto
{
    [JsonPropertyName("firstName")]
    public string FirstName { get; init; }

    [JsonPropertyName("lastName")]
    public string LastName { get; init; }

    [JsonPropertyName("middleName")]
    public string MiddleName { get; init; }

    [JsonPropertyName("requirements")]
    public string Requirements { get; init; }

    [JsonPropertyName("rating")]
    public double Rating { get; init; }

    [JsonPropertyName("avatar")]
    public Uri Avatar { get; init; }
    
    [JsonPropertyName("location")]
    public V1LocationDto Location { get; init; }
    
    [JsonPropertyName("job")]
    public V1JobDto Job { get; init; }

    [JsonPropertyName("subjects")]
    public IReadOnlyCollection<V1SubjectDto> Subjects { get; init; }

    [JsonPropertyName("contacts")]
    public IReadOnlyCollection<V1TutorContactDto> Contacts { get; init; }

    [JsonPropertyName("educations")]
    public IReadOnlyCollection<V1EducationDto> Educations { get; init; }

    [JsonPropertyName("awards")]
    public IReadOnlyCollection<V1AwardDto> Awards { get; init; }
    
    [JsonPropertyName("lessons")]
    public IReadOnlyCollection<V1LessonDto> Lessons { get; init; }
    
    [JsonPropertyName("reviews")]
    public IReadOnlyCollection<V1ReviewDto> Reviews { get; init; }

}