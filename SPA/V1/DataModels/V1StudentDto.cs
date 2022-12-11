using System.Text.Json.Serialization;
using SPA.Models;

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
    public ICollection<V1StudentContactDto> Contacts { get; init; }

    [JsonPropertyName("lessons")]
    public ICollection<V1LessonDto> Lessons { get; init; }
    
    [JsonPropertyName("reviews")]
    public ICollection<V1ReviewDto> Reviews { get; init; }
}