namespace SPA.Models;

public sealed class Education
{
    public Education()
    {
    }
    
    public int Id { get; set; }

    public string Description { get; set; }
    
    public int BeginYear { get; set; }
    
    public int GraduationYear { get; set; }
}