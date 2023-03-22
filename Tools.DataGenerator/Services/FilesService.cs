using Newtonsoft.Json;

namespace Tools.DataGenerator.Services;

public static class FilesService
{
    private const string JsonName = "data.json";
    
    public static Dictionary<string, List<string?>> GetDataFromJson()
    {
        var path = Directory.GetParent(Environment.CurrentDirectory)!.Parent!.Parent!.FullName;
        var json = File.ReadAllText($"{path}\\{JsonName}");
        return JsonConvert.DeserializeObject<Dictionary<string, List<string?>>>(json)!;
    }
}