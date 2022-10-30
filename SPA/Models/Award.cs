namespace SPA.Models;

public sealed class Award
{
    public Award(string description, int year)
    {
        Description = description;
        Year = year;
    }
    
    public string Description { get; }
    public int Year { get; }
}