namespace Tools.DataGenerator.Services;

public class ExtractionService
{
    private readonly Random random = new();
    private const int MaxCollectionLength = 4;
    private const double NullChance = 0.1;

    public T? Get<T>(IEnumerable<T> elements, bool withNull = false)
    {
        return withNull && GetDouble() < NullChance 
            ? default
            : elements
                .OrderBy(_ => random.Next())
                .Take(1)
                .First();
    }

    public List<T> GetCollection<T>(IEnumerable<T> elements)
    {
        return elements
            .OrderBy(_ => random.Next())
            .Take(random.Next(MaxCollectionLength))
            .ToList();
    }

    public int GetNumber(int max = MaxCollectionLength, bool withNull = false)
    {
        return withNull && GetDouble() < NullChance ? default : random.Next(max);
    }
    
    public double GetDouble()
    {
        return random.NextDouble();
    }
    
    public DateTimeOffset GetTime()
    {
        return DateTimeOffset.FromUnixTimeSeconds(random.Next(100000, 1000000));
    }
    
    public bool GetBoolean()
    {
        return random.NextDouble() < 0.5;
    }
}