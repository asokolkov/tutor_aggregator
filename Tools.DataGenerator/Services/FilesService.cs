using Newtonsoft.Json;

namespace Tools.DataGenerator.Services;

public static class FilesService
{
    private const string DataFileName = "data.json";
    
    public static Dictionary<string, List<string?>> GetDataFromJson()
    {
        var json = File.ReadAllText(DataFileName);
        return JsonConvert.DeserializeObject<Dictionary<string, List<string?>>>(json)!;
    }
}