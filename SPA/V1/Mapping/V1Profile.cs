namespace SPA.V1.Mapping;

using AutoMapper;
using DataModels;
using Models;

internal sealed class V1Profile : Profile
{
    public V1Profile()
    {
        CreateMap<Tutor, V1TutorDto>();
        CreateMap<Education, V1EducationDto>();
        CreateMap<Award, V1AwardDto>();
        CreateMap(typeof(IReadOnlyCollection<>), typeof(IReadOnlyCollection<>))
            .ConstructUsing(collection => collection);
        CreateMap<Contact, V1ContactDto>();
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
                        Awards = tutor.Awards.Select(award => new V1AwardDto
                            { Description = award.Description, Year = award.Year }).ToList(),
                        Contacts = tutor.Contacts.Select(contact => new V1ContactDto
                            { Contact = contact.Value, Type = contact.Type }).ToList(),
                        Educations = tutor.Educations.Select(education => new V1EducationDto
                        {
                            Description = education.Description, BeginYear = education.BeginYear,
                            GraduationYear = education.GraduationYear
                        }).ToList(),
                        Subjects = tutor.Subjects
                    })
                    .ToList(),
                page.TotalCount));
    }
}