using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Location
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }
    
    public string City { get; init; }
    
    public string District { get; init; }
}