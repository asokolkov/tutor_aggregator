using Newtonsoft.Json;

namespace Tools.DataGenerator.Services;

public static class FilesService
{
    public static Dictionary<string, List<string?>> ReadFromJson(string jsonPath)
    {
        var json = File.ReadAllText(jsonPath);
        return JsonConvert.DeserializeObject<Dictionary<string, List<string?>>>(json)!;
    }
}