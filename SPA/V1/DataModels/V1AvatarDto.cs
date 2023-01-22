using System.Reflection.Metadata;
using System.Text.Json.Serialization;

namespace SPA.V1.DataModels;

public sealed class V1AvatarDto
{
    [JsonPropertyName("id")]
    public string Id { get; init; }
    
    [JsonPropertyName("image")]
    public byte[] Image { get; init; }
}