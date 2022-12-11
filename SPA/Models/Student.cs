using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA.Models;

public class Student
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }

    public string FirstName { get; init; }

    public string LastName { get; init; }

    public string MiddleName { get; init; }
    
    public Uri Avatar { get; init; }

    public ICollection<StudentContact> Contacts { get; init; }

    public ICollection<Lesson> Lessons { get; init; }
    
    public ICollection<Review> Reviews { get; init; }
}