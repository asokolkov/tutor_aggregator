namespace Tools.DataGenerator.Services;

public static class ExtractionService
{
    private static readonly Random Random = new();
    private const int MaxCollectionLength = 4;
    private const double NullChance = 0.1;

    public static T? Get<T>(IEnumerable<T> elements, bool withNull = false)
    {
        return withNull && GetDouble() < NullChance 
            ? default
            : elements
                .OrderBy(_ => Random.Next())
                .Take(1)
                .First();
    }

    public static List<T> GetCollection<T>(IEnumerable<T> elements)
    {
        return elements
            .OrderBy(_ => Random.Next())
            .Take(Random.Next(MaxCollectionLength))
            .ToList();
    }

    public static int GetNumber(int max = MaxCollectionLength, bool withNull = false)
    {
        return withNull && GetDouble() < NullChance ? default : Random.Next(max);
    }
    
    public static double GetDouble()
    {
        return Random.NextDouble();
    }
    
    public static DateTimeOffset GetTime()
    {
        return DateTimeOffset.FromUnixTimeSeconds(Random.Next(100000, 1000000));
    }
    
    public static bool GetBoolean()
    {
        return Random.NextDouble() < 0.5;
    }
}