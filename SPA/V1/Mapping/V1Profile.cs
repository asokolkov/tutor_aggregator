namespace SPA.V1.Mapping;

using AutoMapper;
using DataModels;
using Models;

internal sealed class V1Profile : Profile
{
    public V1Profile()
    {
        CreateMap<Award, V1AwardDto>();
        CreateMap<TutorContact, V1TutorContactDto>();
        CreateMap<StudentContact, V1StudentContactDto>();
        CreateMap<Education, V1EducationDto>();
        CreateMap<Job, V1JobDto>();
        CreateMap<Location, V1LocationDto>();
        CreateMap<Review, V1ReviewDto>();
        CreateMap<Subject, V1SubjectDto>();
        
        CreateMap<Tutor, V1TutorDto>().ReverseMap();
        CreateMap<Student, V1StudentDto>().ReverseMap();
        CreateMap<Lesson, V1LessonDto>().ReverseMap();
        
        CreateMap<Page<Tutor>, V1PageDto<V1TutorDto>>().ReverseMap();
        CreateMap<Page<Student>, V1PageDto<V1StudentDto>>().ReverseMap();
        CreateMap<Page<Lesson>, V1PageDto<V1LessonDto>>().ReverseMap();
        
        CreateMap(typeof(IReadOnlyCollection<>), 
                typeof(IReadOnlyCollection<>))
            .ConstructUsing(collection => collection);
    }
}