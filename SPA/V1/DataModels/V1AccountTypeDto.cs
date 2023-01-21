namespace SPA.V1.DataModels;

using System.Text.Json.Serialization;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum V1AccountTypeDto : byte
{
    Tutor,
    Student
}