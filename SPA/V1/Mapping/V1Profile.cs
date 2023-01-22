namespace SPA.V1.Mapping;

using AutoMapper;
using DataModels;
using Domain;
using Entities;

internal sealed class V1Profile : Profile
{
    public V1Profile()
    {
        CreateMap<TutorEntity, Tutor>().ReverseMap();
        CreateMap<Tutor, V1TutorDto>().ReverseMap();
        CreateMap<Page<Tutor>, V1PageDto<V1TutorDto>>().ReverseMap();
        // CreateMap<List<TutorEntity>, List<Tutor>>().ReverseMap();
        
        CreateMap<AwardEntity, Award>().ReverseMap();
        CreateMap<Award, V1AwardDto>().ReverseMap();
        CreateMap<Page<Award>, V1PageDto<V1AwardDto>>().ReverseMap();
        
        CreateMap<EducationEntity, Education>().ReverseMap();
        CreateMap<Education, V1EducationDto>().ReverseMap();
        CreateMap<Page<Education>, V1PageDto<V1EducationDto>>().ReverseMap();
        
        CreateMap<JobEntity, Job>().ReverseMap();
        CreateMap<Job, V1JobDto>().ReverseMap();
        CreateMap<Page<Job>, V1PageDto<V1JobDto>>().ReverseMap();
        
        CreateMap<LessonEntity, Lesson>().ReverseMap();
        CreateMap<Lesson, V1LessonDto>().ReverseMap();
        CreateMap<Page<Lesson>, V1PageDto<V1LessonDto>>().ReverseMap();
        
        CreateMap<LocationEntity, Location>().ReverseMap();
        CreateMap<Location, V1LocationDto>().ReverseMap();
        CreateMap<Page<Location>, V1PageDto<V1LocationDto>>().ReverseMap();
        
        CreateMap<ReviewEntity, Review>().ReverseMap();
        CreateMap<Review, V1ReviewDto>().ReverseMap();
        CreateMap<Page<Review>, V1PageDto<V1ReviewDto>>().ReverseMap();
        
        CreateMap<StudentContactEntity, StudentContact>().ReverseMap();
        CreateMap<StudentContact, V1StudentContactDto>().ReverseMap();
        CreateMap<Page<StudentContact>, V1PageDto<V1StudentContactDto>>().ReverseMap();
        
        CreateMap<StudentEntity, Student>().ReverseMap();
        CreateMap<Student, V1StudentDto>().ReverseMap();
        CreateMap<Page<Student>, V1PageDto<V1StudentDto>>().ReverseMap();
        
        CreateMap<SubjectEntity, Subject>().ReverseMap();
        CreateMap<Subject, V1SubjectDto>().ReverseMap();
        CreateMap<Page<Subject>, V1PageDto<V1SubjectDto>>().ReverseMap();
        
        CreateMap<TutorContactEntity, TutorContact>().ReverseMap();
        CreateMap<TutorContact, V1TutorContactDto>().ReverseMap();
        CreateMap<Page<TutorContact>, V1PageDto<V1TutorContactDto>>().ReverseMap();
        
        CreateMap<User, V1UserDto>();
        
        CreateMap<Review, V1ReviewDto>()
            .ForMember(dest => dest.StudentId, opt => opt.MapFrom(src => src.Student.Avatar))
            .ForMember(dest => dest.StudentAvatar, opt => opt.MapFrom(src => src.Student.Avatar));
        
        CreateMap<V1UpdateTutorDto, UpdateTutor>();
    }
}