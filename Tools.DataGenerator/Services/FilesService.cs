using Newtonsoft.Json;

namespace Tools.DataGenerator.Services;

public class FilesService
{
    private const string DataFileName = "data.json";
    
    public Dictionary<string, List<string?>> GetDataFromJson()
    {
        var json = File.ReadAllText(DataFileName);
        return JsonConvert.DeserializeObject<Dictionary<string, List<string?>>>(json)!;
    }
}