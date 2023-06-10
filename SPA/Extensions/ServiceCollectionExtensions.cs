using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using SPA.Application.Tutors.Commands.CreateReviewCommand;
using SPA.Application.Tutors.Commands.UpdateTutorCommand;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Application.Tutors.Queries.GetTutorsQuery;

namespace SPA.Extensions;

using System.Reflection;
using Application.Behaviors;
using Application.Tutors.Queries.GetReviewsQuery;
using Authorization;
using EFCore.Postgres.Extensions;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Internal;
using Repositories;
using Repositories.Impl;
using Services;
using Services.Impl;
using V1.Mapping;

internal static class ServiceCollectionExtensions
{
    public static void SetUpServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("Postgres");
        services.AddApplicationContext(connectionString);

        services.AddAutoMapper(opt => opt.AddProfile<V1Profile>());

        services
            .AddScoped<IValidator<GetStudentsQuery>, GetStudentsQueryValidator>()
            .AddScoped<IValidator<GetStudentQuery>, GetStudentQueryValidator>()
            .AddScoped<IValidator<UpdateStudentCommand>, UpdateStudentCommandValidator>();

        services
            .AddScoped<IValidator<GetTutorsQuery>, GetTutorsQueryValidator>()
            .AddScoped<IValidator<GetTutorQuery>, GetTutorQueryValidator>()
            .AddScoped<IValidator<UpdateTutorCommand>, UpdateTutorCommandValidator>()
            .AddScoped<IValidator<GetReviewsQuery>, GetReviewsQueryValidator>()
            .AddScoped<IValidator<CreateReviewCommand>, CreateReviewCommandValidator>();

        services
            .AddScoped<IUserService, UserService>()
            .AddScoped<ILessonsManager, LessonsManager>();

        services
            .AddScoped<IUserRepository, UserRepository>()
            .AddScoped<ITutorsRepository, TutorsRepository>()
            .AddScoped<IStudentsRepository, StudentsRepository>()
            .AddScoped<ILocationsRepository, LocationsRepository>()
            .AddScoped<ISubjectsRepository, SubjectsRepository>()
            .AddScoped<IReviewsRepository, ReviewsRepository>()
            .AddScoped<IAvatarsRepository, AvatarsRepository>()
            .AddScoped<ILessonsRepository, LessonsRepository>();

        services
            .AddScoped<IAuthorizationHandler, CancelLessonAuthorizationHandler>()
            .AddScoped<IAuthorizationHandler, DeleteLessonAuthorizationHandler>()
            .AddScoped<IAuthorizationHandler, CreateLessonAuthorizationHandler>()
            .AddScoped<IAuthorizationHandler, BookLessonAuthorizationHandler>()
            .AddScoped<IAuthorizationHandler, CreateReviewAuthorizationHandler>();

        services.AddMediatR();
        services.AddSingleton<ISystemClock, SystemClock>();
    }

    private static void AddMediatR(this IServiceCollection services)
    {
        var assembly = Assembly.GetCallingAssembly();

        services.AddMediatR(assembly);

        services.AddScoped(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));

        foreach (var type in assembly.GetTypes())
        {
            var validatorInterface = type.GetInterface("IValidator`1");
            if (validatorInterface != null)
                services.AddScoped(validatorInterface, type);
        }
    }
}