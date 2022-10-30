namespace SPA.Models;

public sealed class Education
{
    public Education(string description, int beginYear, int graduationYear)
    {
        Description = description;
        BeginYear = beginYear;
        GraduationYear = graduationYear;
    }

    public string Description { get; }
    
    public int BeginYear { get; }
    
    public int GraduationYear { get; }
}