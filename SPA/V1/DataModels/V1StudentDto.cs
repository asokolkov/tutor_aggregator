using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1StudentDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("firstName")]
    public string FirstName { get; init; }

    [JsonPropertyName("lastName")]
    public string LastName { get; init; }

    [JsonPropertyName("avatar")]
    public Uri Avatar { get; init; }

    [JsonPropertyName("contacts")]
    public string Contacts { get; init; }

    [JsonPropertyName("lessons")]
    public IReadOnlyCollection<V1LessonDto> Lessons { get; init; }
}