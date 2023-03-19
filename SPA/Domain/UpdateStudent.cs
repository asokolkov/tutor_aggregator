namespace SPA.Domain;

internal sealed class UpdateStudent
{
    public string FirstName { get; init; }

    public string LastName { get; init; }
    
    public int Age { get; init; }

    public string Description { get; init; }
    
    public string EducationPlace { get; init; }
    
    public int Grade { get; init; }
    
    public ICollection<StudentContact> Contacts { get; set; }
}