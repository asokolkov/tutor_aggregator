namespace Tools.DataGenerator.Extensions;

internal static class EnumerableExtensions
{
    public static IEnumerable<T> GetRandomSubEnumerable<T>(this IEnumerable<T> elements)
    {
        var random = new Random();
        foreach (var element in elements)
        {
            if (random.Next(0, 1) == 0)
                yield return element;
        }
    }
}