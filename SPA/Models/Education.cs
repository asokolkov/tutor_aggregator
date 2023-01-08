namespace SPA.Models;

public sealed class Education : IEntity
{
    public int Id { get; init; }
    
    public string Description { get; init; }
    
    public int BeginYear { get; init; }
    
    public int GraduationYear { get; init; }
}