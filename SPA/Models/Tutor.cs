namespace SPA.Models;

public sealed class Tutor
{
    public Tutor(
        string firstName,
        string lastName,
        string location,
        string requirements,
        double rating,
        Uri avatar)
    {
        FirstName = firstName;
        LastName = lastName;
        Location = location;
        Requirements = requirements;
        Rating = rating;
        Avatar = avatar;
    }

    public string FirstName { get; }

    public string LastName { get; }

    public string MiddleName { get; }

    public string Location { get; }

    public string Requirements { get; }
    
    public double Rating { get; }

    public Uri Avatar { get; }

    public IReadOnlyCollection<string> Subjects { get; set; } = Array.Empty<string>();

    public IReadOnlyCollection<Contact> Contacts { get; set; } = Array.Empty<Contact>();

    public IReadOnlyCollection<Education> Educations { get; set; } = Array.Empty<Education>();

    public IReadOnlyCollection<Award> Awards { get; set; } = Array.Empty<Award>();
}