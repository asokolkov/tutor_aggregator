using SPA.Application.Avatars.Commands.CreateAvatarCommand;
using SPA.Application.Avatars.Queries.GetAvatarQuery;
using SPA.Application.Locations.Commands.UpdateLocationCommand;
using SPA.Application.Locations.Queries.GetLocationQuery;
using SPA.Application.Locations.Queries.GetLocationsQuery;
using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetLessonsQuery;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using SPA.Application.Subjects.Queries.GetSubjectsQuery;
using SPA.Application.Tutors.Commands.CreateReviewCommand;
using SPA.Application.Tutors.Commands.UpdateTutorCommand;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Application.Tutors.Queries.GetTutorsQuery;
using SPA.Application.Users.Queries.GetCurrentUserQuery;

namespace SPA.Extensions;

using Application.Tutors.Queries.GetReviewsQuery;
using Authorization;
using Domain;
using EFCore.Postgres.Extensions;
using MediatR;
using Microsoft.AspNetCore.Authorization;
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
        services.AddMediatR(typeof(Program));

        services.AddScoped<IRequestHandler<GetStudentsQuery, Page<Student>>, GetStudentsQueryHandler>();
        services.AddScoped<IRequestHandler<GetStudentQuery, Student>, GetStudentQueryHandler>();
        services.AddScoped<IRequestHandler<UpdateStudentCommand, Student>, UpdateStudentCommandHandler>();

        services.AddScoped<IRequestHandler<GetTutorsQuery, Page<Tutor>>, GetTutorsQueryHandler>();
        services.AddScoped<IRequestHandler<GetTutorQuery, Tutor>, GetTutorQueryHandler>();
        services.AddScoped<IRequestHandler<UpdateTutorCommand, Tutor>, UpdateTutorCommandHandler>();
        services.AddScoped<IRequestHandler<GetTutorReviewsQuery, Page<Review>>, GetReviewsCommandHandler>();
        services.AddScoped<IRequestHandler<CreateReviewCommand, Review>, CreateReviewCommandHandler>();

        services.AddScoped<IRequestHandler<GetLocationsQuery, Page<Location>>, GetLocationsQueryHandler>();
        services.AddScoped<IRequestHandler<GetLocationQuery, Location>, GetLocationQueryHandler>();
        services.AddScoped<IRequestHandler<UpdateLocationCommand, Location>, UpdateLocationCommandHandler>();

        services.AddScoped<IRequestHandler<GetSubjectsQuery, List<Subject>>, GetSubjectQueryHandler>();

        services.AddScoped<IRequestHandler<GetUserQuery, User>, GetUserQueryHandler>();

        services.AddScoped<IRequestHandler<GetAvatarQuery, byte[]>, GetAvatarQueryHandler>();
        services.AddScoped<IRequestHandler<CreateAvatarCommand, byte[]>, CreateAvatarCommandHandler>();

        services
            .AddScoped<IRequestHandler<GetStudentLessonsQuery, ICollection<Lesson>>, GetStudentLessonsQueryHandler>();

        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<ITutorsRepository, TutorsRepository>();
        services.AddScoped<IStudentsRepository, StudentsRepository>();
        services.AddScoped<ILocationsRepository, LocationsRepository>();
        services.AddScoped<ISubjectsRepository, SubjectsRepository>();
        services.AddScoped<IReviewsRepository, ReviewsRepository>();
        services.AddScoped<IAvatarsRepository, AvatarsRepository>();
        services.AddScoped<ILessonRepository, LessonRepository>();

        services
            .AddScoped<IAuthorizationHandler, CancelLessonAuthorizationHadnler>()
            .AddScoped<IAuthorizationHandler, CreateLessonAuthorizationHandler>()
            .AddScoped<IAuthorizationHandler, BookLessonAuthorizationHandler>()
            .AddScoped<IAuthorizationHandler, CreateReviewAuthorizationHandler>();
    }
}