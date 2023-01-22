﻿using System.Reflection.Metadata;

namespace SPA.Entities;

internal sealed class StudentEntity
{
    public Guid Id { get; init; }

    public string FirstName { get; init; }

    public string LastName { get; init; }

    public Blob Avatar { get; init; }

    public string Contacts { get; set; }

    public ICollection<LessonEntity> Lessons { get; init; }
    
    public ICollection<ReviewEntity> Reviews { get; init; }
}