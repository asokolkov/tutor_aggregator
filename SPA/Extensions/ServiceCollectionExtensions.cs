using SPA.Application.Lessons.Queries.GetLesson;
using SPA.Application.Lessons.Queries.GetLessons;
using SPA.Application.Lessons.Queries.UpdateLesson;
using SPA.Application.Students.Queries.GetStudent;
using SPA.Application.Students.Queries.GetStudents;
using SPA.Application.Students.Queries.GetTutors;
using SPA.Application.Students.Queries.UpdateTutor;
using SPA.Application.Tutors.Queries.GetTutor;
using SPA.Application.Tutors.Queries.GetTutors;
using SPA.Application.Tutors.Queries.UpdateTutor;
using SPA.V1.DataModels;

namespace SPA.Extensions;

using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;
using Repositories.Impl;
using V1.Mapping;

internal static class ServiceCollectionExtensions
{
    public static IServiceCollection SetUpServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped(typeof(ICrudRepository<>), typeof(PostgresRepository<>));

        var connectionString = configuration.GetConnectionString("Postgres");
        services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(connectionString));
        
        services.AddAutoMapper(opt => opt.AddProfile<V1Profile>());
        services.AddMediatR(typeof(Program));

        services.AddTransient<IRequestHandler<GetLessons, Page<Lesson>>, GetLessonsHandler>();
        services.AddTransient<IRequestHandler<GetLesson, Lesson>, GetLessonHandler>();
        services.AddTransient<IRequestHandler<UpdateLesson, V1LessonDto>, UpdateLessonHandler>();
        
        services.AddTransient<IRequestHandler<GetStudents, Page<Student>>, GetStudentsHandler>();
        services.AddTransient<IRequestHandler<GetStudent, Student>, GetStudentHandler>();
        services.AddTransient<IRequestHandler<UpdateStudent, V1StudentDto>, UpdateStudentHandler>();
        
        services.AddTransient<IRequestHandler<GetTutors, Page<Tutor>>, GetTutorsHandler>();
        services.AddTransient<IRequestHandler<GetTutor, Tutor>, GetTutorHandler>();
        services.AddTransient<IRequestHandler<UpdateTutor, V1TutorDto>, UpdateTutorHandler>();

        return services;
    }
}