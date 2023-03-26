namespace SPA.Domain;

public sealed class StudentEducation
{
    public Guid Id { get; init; }
    
    public string Value { get; init; }
    
    public int Grade { get; init; }
}