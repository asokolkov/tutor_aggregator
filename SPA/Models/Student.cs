using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public class Student
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }

    [Required] public string FirstName { get; init; }

    [Required] public string LastName { get; init; }

    [Required] public string MiddleName { get; init; }
    
    public Uri Avatar { get; init; }

    public IReadOnlyCollection<Contact> Contacts { get; init; } = new List<Contact>();

    public IReadOnlyCollection<Lesson> Lessons { get; init; } = new List<Lesson>();
    
    public IReadOnlyCollection<Review> Reviews { get; init; } = new List<Review>();
}