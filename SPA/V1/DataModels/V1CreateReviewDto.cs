using Newtonsoft.Json;

namespace SPA.V1.DataModels;

public sealed class V1CreateReviewDto
{
    [JsonProperty("rating")]
    public double Rating { get; init; }

    [JsonProperty("description")]
    public string Description { get; init; }
}