using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Lesson
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }
    
    public double Price { get; init; }
    
    public bool Confirmed { get; init; }
    
    public DateTime StartTime { get; init; }
    
    public DateTime EndTime { get; init; }
}