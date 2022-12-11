using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Lesson
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    public double Price { get; init; }
    
    public bool Confirmed { get; init; }
    
    public DateTimeOffset StartTime { get; init; }
    
    public DateTimeOffset EndTime { get; init; }
}