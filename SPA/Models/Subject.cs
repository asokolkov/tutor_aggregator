using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Subject
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }
    
    public string Description { get; init; }
}