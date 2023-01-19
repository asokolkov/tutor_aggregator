using SPA.Application.Locations.Commands.UpdateLocationCommand;
using SPA.Application.Locations.Queries.GetLocationQuery;
using SPA.Application.Locations.Queries.GetLocationsQuery;
using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using SPA.Application.Tutors.Commands.UpdateTutorCommand;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Application.Tutors.Queries.GetTutorsQuery;

namespace SPA.Extensions;

using Application.Tutors.Queries.GetReviewsQuery;
using Application.Users.GetCurrentUserQuery;
using Data;
using Domain;
using Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
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
        services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(connectionString,
            o => o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)));

        services.AddAutoMapper(opt => opt.AddProfile<V1Profile>());
        services.AddMediatR(typeof(Program));

        services.AddScoped<IRequestHandler<GetStudentsQuery, Page<Student>>, GetStudentsQueryHandler>();
        services.AddScoped<IRequestHandler<GetStudentQuery, Student>, GetStudentQueryHandler>();
        services.AddScoped<IRequestHandler<UpdateStudentCommand, Student>, UpdateStudentCommandHandler>();

        services.AddScoped<IRequestHandler<GetTutorsQuery, Page<Tutor>>, GetTutorsQueryHandler>();
        services.AddScoped<IRequestHandler<GetTutorQuery, Tutor>, GetTutorQueryHandler>();
        services.AddScoped<IRequestHandler<UpdateTutorCommand, Tutor>, UpdateTutorCommandHandler>();
        services.AddScoped<IRequestHandler<GetTutorReviewsQuery, Page<Review>>, GetReviewsCommandHandler>();

        services.AddScoped<IRequestHandler<GetLocationsQuery, Page<Location>>, GetLocationsQueryHandler>();
        services.AddScoped<IRequestHandler<GetLocationQuery, Location>, GetLocationQueryHandler>();
        services.AddScoped<IRequestHandler<UpdateLocationCommand, Location>, UpdateLocationCommandHandler>();

        services.AddScoped<IRequestHandler<GetUserQuery, User>, GetUserQueryHandler>();

        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<ITutorsRepository, TutorsRepository>();
        services.AddScoped<IStudentsRepository, StudentsRepository>();
        services.AddScoped<ILocationRepository, LocationRepository>();
    }
}