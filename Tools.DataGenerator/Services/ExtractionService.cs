namespace Tools.DataGenerator.Services;

public class ExtractionService
{
    private static readonly Random Random = new();
    private readonly int maxCollectionLength;

    public ExtractionService(int maxCollectionLength)
    {
        this.maxCollectionLength = maxCollectionLength;
    }
    
    public T Get<T>(IEnumerable<T> elements, bool withNullable = true)
    {
        return elements
            .Where(x => withNullable || x != null)
            .OrderBy(_ => Random.Next())
            .Take(1)
            .ToList()
            .First();
    }

    public List<T> GetCollection<T>(IEnumerable<T> elements, bool withNullable = true)
    {
        return elements
            .Where(x => withNullable || x != null)
            .OrderBy(_ => Random.Next())
            .Take(Random.Next(maxCollectionLength))
            .ToList();
    }

    public int GetNumber(int max)
    {
        return Random.Next(max);
    }
    
    public double GetDouble()
    {
        return Random.NextDouble();
    }
    
    public DateTimeOffset GetTime()
    {
        return DateTimeOffset.FromUnixTimeSeconds(Random.Next(100000, 1000000));
    }
    
    public bool GetBoolean()
    {
        return Random.NextDouble() < 0.5;
    }
}