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
        CreateMap<Page<Tutor>, V1PageDto<V1TutorDto>>();
        CreateMap<Page<Student>, V1PageDto<V1StudentDto>>();
    }
}