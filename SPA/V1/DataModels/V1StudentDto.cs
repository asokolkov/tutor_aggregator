using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1StudentDto
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
    public IReadOnlyCollection<V1StudentContactDto> Contacts { get; init; }

    [JsonPropertyName("lessons")]
    public IReadOnlyCollection<V1LessonDto> Lessons { get; init; }
    
    [JsonPropertyName("reviews")]
    public IReadOnlyCollection<V1ReviewDto> Reviews { get; init; }
}