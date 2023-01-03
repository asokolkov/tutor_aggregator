using SPA.Application.Locations.Commands.UpdateLocationCommand;
using SPA.Application.Locations.Queries.GetLocationQuery;
using SPA.Application.Locations.Queries.GetLocationsQuery;
using SPA.Application.Reviews.Commands.UpdateReviewCommand;
using SPA.Application.Reviews.Queries.GetReviewQuery;
using SPA.Application.Reviews.Queries.GetReviewsQuery;
using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using SPA.Application.Tutors.Commands.UpdateTutorCommand;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Application.Tutors.Queries.GetTutorsQuery;
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
        
        services.AddTransient<IRequestHandler<GetStudentsQuery, Page<Student>>, GetStudentsQueryHandler>();
        services.AddTransient<IRequestHandler<GetStudentQuery, Student>, GetStudentQueryHandler>();
        services.AddTransient<IRequestHandler<UpdateStudentCommand, Student>, UpdateStudentCommandHandler>();
        
        services.AddTransient<IRequestHandler<GetTutorsQuery, Page<Tutor>>, GetTutorsQueryHandler>();
        services.AddTransient<IRequestHandler<GetTutorQuery, Tutor>, GetTutorQueryHandler>();
        services.AddTransient<IRequestHandler<UpdateTutorCommand, Tutor>, UpdateTutorCommandHandler>();
        
        services.AddTransient<IRequestHandler<GetLocationsQuery, Page<Location>>, GetLocationsQueryHandler>();
        services.AddTransient<IRequestHandler<GetLocationQuery, Location>, GetLocationQueryHandler>();
        services.AddTransient<IRequestHandler<UpdateLocationCommand, Location>, UpdateLocationCommandHandler>();
        
        services.AddTransient<IRequestHandler<GetReviewsQuery, Page<Review>>, GetReviewsQueryHandler>();
        services.AddTransient<IRequestHandler<GetReviewQuery, Review>, GetReviewQueryHandler>();
        services.AddTransient<IRequestHandler<UpdateReviewCommand, Review>, UpdateReviewCommandHandler>();

        return services;
    }
}