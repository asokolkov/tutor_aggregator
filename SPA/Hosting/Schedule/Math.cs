namespace SPA.Hosting.Schedule;

internal static class Math
{
    public static TimeSpan Max(TimeSpan t1, TimeSpan t2) => t1.CompareTo(t2) > 0 ? t1 : t2;
}