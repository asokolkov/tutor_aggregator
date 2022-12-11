namespace SPA.V1.Mapping;

using AutoMapper;
using DataModels;
using Models;

internal sealed class V1Profile : Profile
{
    public V1Profile()
    {
        CreateMap<Award, V1AwardDto>();
        CreateMap<Contact, V1ContactDto>();
        CreateMap<Education, V1EducationDto>();
        CreateMap<Job, V1JobDto>();
        CreateMap<Lesson, V1LessonDto>();
        CreateMap<Location, V1LocationDto>();
        CreateMap<Review, V1ReviewDto>();
        CreateMap<Subject, V1SubjectDto>();
        CreateMap<Student, V1StudentDto>();
        CreateMap<Tutor, V1TutorDto>();
        CreateMap(typeof(IReadOnlyCollection<>), typeof(IReadOnlyCollection<>))
            .ConstructUsing(collection => collection);
        CreateMap<Page<Tutor>, V1PageDto<V1TutorDto>>()
            .ConstructUsing(page => new V1PageDto<V1TutorDto>(
                page.Items.Select(tutor => new V1TutorDto
                    {
                        FirstName = tutor.FirstName,
                        LastName = tutor.LastName,
                        MiddleName = tutor.MiddleName,
                        Requirements = tutor.Requirements,
                        Location = tutor.Location,
                        Rating = tutor.Rating,
                        Avatar = tutor.Avatar,
                        Job = tutor.Job,
                        Awards = tutor.Awards.Select(x => new V1AwardDto
                        {
                            Description = x.Description, 
                            Year = x.Year
                        }).ToList(),
                        Contacts = tutor.Contacts.Select(x => new V1ContactDto
                        {
                            Value = x.Value, 
                            Type = x.Type
                        }).ToList(),
                        Educations = tutor.Educations.Select(x => new V1EducationDto
                        {
                            Description = x.Description, 
                            BeginYear = x.BeginYear,
                            GraduationYear = x.GraduationYear
                        }).ToList(),
                        Subjects = tutor.Subjects.Select(x => new V1SubjectDto
                        {
                            Description = x.Description
                        }).ToList(),
                        Lessons = tutor.Lessons.Select(x => new V1LessonDto
                        {
                            Price = x.Price,
                            Confirmed = x.Confirmed,
                            StartTime = x.StartTime,
                            EndTime = x.EndTime
                        }).ToList(),
                        Reviews = tutor.Reviews.Select(x => new V1ReviewDto
                        {
                            Rating = x.Rating,
                            Description = x.Description,
                            ModificationTime = x.ModificationTime
                        }).ToList()
                    })
                    .ToList(),
                page.TotalCount));
        CreateMap<Page<Student>, V1PageDto<V1StudentDto>>()
            .ConstructUsing(page => new V1PageDto<V1StudentDto>(
                page.Items.Select(tutor => new V1StudentDto
                    {
                        FirstName = tutor.FirstName,
                        LastName = tutor.LastName,
                        MiddleName = tutor.MiddleName,
                        Avatar = tutor.Avatar,
                        Contacts = tutor.Contacts.Select(x => new V1ContactDto
                        {
                            Value = x.Value, 
                            Type = x.Type
                        }).ToList(),
                        Lessons = tutor.Lessons.Select(x => new V1LessonDto
                        {
                            Price = x.Price,
                            Confirmed = x.Confirmed,
                            StartTime = x.StartTime,
                            EndTime = x.EndTime
                        }).ToList(),
                        Reviews = tutor.Reviews.Select(x => new V1ReviewDto
                        {
                            Rating = x.Rating,
                            Description = x.Description,
                            ModificationTime = x.ModificationTime
                        }).ToList()
                    })
                    .ToList(),
                page.TotalCount));
    }
}