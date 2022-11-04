namespace SPA.Models;

public sealed class Award
{
    public Award()
    {
    }

    public int Id { get; set; }
    
    public string Description { get; set; }
    
    public int Year { get; set; }
}