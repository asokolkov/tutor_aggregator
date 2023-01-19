namespace SPA.Domain;

public sealed class Education
{
    public Guid Id { get; init; }
    
    public string Description { get; init; }
    
    public int BeginYear { get; init; }
    
    public int GraduationYear { get; init; }
}