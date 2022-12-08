using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Award
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }
    
    public string Description { get; init; }
    
    public int Year { get; init; }
}