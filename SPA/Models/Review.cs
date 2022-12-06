using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Review
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }
    
    public double Rating { get; init; }
    
    public string Description { get; init; }
    
    public DateTime ModificationTime { get; init; }
}