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

        CreateMap<LessonEntity, Lesson>().ReverseMap();
        CreateMap<Lesson, V1LessonDto>().ReverseMap();
        CreateMap<Page<Lesson>, V1PageDto<V1LessonDto>>().ReverseMap();
        
        CreateMap<LocationEntity, Location>().ReverseMap();
        CreateMap<Location, V1LocationDto>().ReverseMap();
        CreateMap<Page<Location>, V1PageDto<V1LocationDto>>().ReverseMap();
        
        CreateMap<ReviewEntity, Review>().ReverseMap();
        CreateMap<Review, V1ReviewDto>().ReverseMap();
        CreateMap<Page<Review>, V1PageDto<V1ReviewDto>>().ReverseMap();

        CreateMap<StudentEntity, Student>().ReverseMap();
        CreateMap<Student, V1StudentDto>().ReverseMap();
        CreateMap<Page<Student>, V1PageDto<V1StudentDto>>().ReverseMap();
        
        CreateMap<SubjectEntity, Subject>().ReverseMap();
        CreateMap<Subject, V1SubjectDto>().ReverseMap();
        CreateMap<Page<Subject>, V1PageDto<V1SubjectDto>>().ReverseMap();

        CreateMap<User, V1UserDto>();

        CreateMap<V1UpdateTutorDto, UpdateTutor>();
        
        CreateMap<AvatarEntity, Avatar>().ReverseMap();
        // CreateMap<Avatar, V1AvatarDto>().ReverseMap();
    }
}