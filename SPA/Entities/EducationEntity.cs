namespace SPA.Entities;

internal sealed class EducationEntity
{
    public Guid Id { get; init; }
    
    public string Description { get; init; }

    public int GraduationYear { get; init; }
}