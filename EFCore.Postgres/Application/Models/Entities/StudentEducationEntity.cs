namespace EFCore.Postgres.Application.Models.Entities;

public sealed class StudentEducationEntity
{
    public Guid Id { get; init; }
    
    public string Value { get; init; }
    
    public int Grade { get; init; }
}