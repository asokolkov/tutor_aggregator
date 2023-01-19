namespace SPA.V1.Mapping;

using AutoMapper;
using DataModels;
using Domain;
using Entities;

internal sealed class V1Profile : Profile
{
    public V1Profile()
    {
        CreateMap<AwardEntity, V1AwardDto>();
        CreateMap<TutorContactEntity, V1TutorContactDto>();
        CreateMap<StudentContactEntity, V1StudentContactDto>();
        CreateMap<EducationEntity, V1EducationDto>();
        CreateMap<JobEntity, V1JobDto>();
        CreateMap<LocationEntity, V1LocationDto>();
        CreateMap<SubjectEntity, V1SubjectDto>();

        CreateMap<User, V1UserDto>();
        
        CreateMap<TutorEntity, V1TutorDto>().ReverseMap();
        CreateMap<StudentEntity, V1StudentDto>().ReverseMap();
        CreateMap<LessonEntity, V1LessonDto>().ReverseMap();
        CreateMap<ReviewEntity, V1ReviewDto>()
            .ForMember(dest => dest.StudentId, opt => opt.MapFrom(src => src.Student.Id))
            .ForMember(dest => dest.StudentAvatar, opt => opt.MapFrom(src => src.Student.Avatar));
        CreateMap<ICollection<ReviewEntity>, ICollection<V1LessonDto>>().ReverseMap();
        
        CreateMap<Page<TutorEntity>, V1PageDto<V1TutorDto>>().ReverseMap();
        CreateMap<Page<StudentEntity>, V1PageDto<V1StudentDto>>().ReverseMap();
        CreateMap<Page<LessonEntity>, V1PageDto<V1LessonDto>>().ReverseMap();

        CreateMap<V1UpdateTutorDto, UpdateTutor>();

        CreateMap<Tutor, TutorEntity>().ReverseMap();
        CreateMap<Student, StudentEntity>().ReverseMap();
        CreateMap<Award, AwardEntity>().ReverseMap();
        CreateMap<Education, EducationEntity>().ReverseMap();
        CreateMap<Job, JobEntity>().ReverseMap();
        CreateMap<Lesson, LessonEntity>().ReverseMap();
        CreateMap<Location, LocationEntity>().ReverseMap();
        CreateMap<Review, ReviewEntity>().ReverseMap();
        CreateMap<StudentContact, StudentContactEntity>().ReverseMap();
        CreateMap<Subject, SubjectEntity>().ReverseMap();
        CreateMap<TutorContact, TutorContactEntity>().ReverseMap();

        CreateMap(typeof(IReadOnlyCollection<>), 
                typeof(IReadOnlyCollection<>))
            .ConstructUsing(collection => collection);
    }
}