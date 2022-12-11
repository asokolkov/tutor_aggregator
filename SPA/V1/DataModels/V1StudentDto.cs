using System.Text.Json.Serialization;
using SPA.Models;

namespace SPA.V1.DataModels;

internal sealed class V1StudentDto
{
    [JsonPropertyName("firstName")]
    public string FirstName { get; init; }

    [JsonPropertyName("lastName")]
    public string LastName { get; init; }

    [JsonPropertyName("middleName")]
    public string MiddleName { get; init; }
    
    [JsonPropertyName("avatar")]
    public Uri Avatar { get; init; }

    [JsonPropertyName("contacts")]
    public IReadOnlyCollection<V1ContactDto> Contacts { get; init; } = Array.Empty<V1ContactDto>();

    [JsonPropertyName("lessons")]
    public IReadOnlyCollection<V1LessonDto> Lessons { get; init; } = Array.Empty<V1LessonDto>();
    
    [JsonPropertyName("reviews")]
    public IReadOnlyCollection<V1ReviewDto> Reviews { get; init; } = Array.Empty<V1ReviewDto>();
}