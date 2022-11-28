using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public sealed class Job
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }
    
    public string Place { get; init; }

    public string Post { get; init; }
}