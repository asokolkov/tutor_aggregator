﻿using SPA.Application.Locations.Commands.UpdateLocationCommand;
using SPA.Application.Locations.Queries.GetLocationQuery;
using SPA.Application.Locations.Queries.GetLocationsQuery;
using SPA.Application.Reviews.Commands.UpdateReviewCommand;
using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using SPA.Application.Tutors.Commands.GetReviewsCommand;
using SPA.Application.Tutors.Commands.UpdateTutorCommand;
using SPA.Application.Tutors.Queries.GetTutorQuery;
using SPA.Application.Tutors.Queries.GetTutorsQuery;

namespace SPA.Extensions;

using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;
using Repositories.Impl;
using Services;
using Services.Impl;
using V1.Mapping;

internal static class ServiceCollectionExtensions
{
    public static IServiceCollection SetUpServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped(typeof(ICrudRepository<>), typeof(PostgresRepository<>));

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
        services.AddScoped<IRequestHandler<GetReviewsCommand, Page<Review>>, GetReviewsCommandHandler>();
        
        services.AddScoped<IRequestHandler<GetLocationsQuery, Page<Location>>, GetLocationsQueryHandler>();
        services.AddScoped<IRequestHandler<GetLocationQuery, Location>, GetLocationQueryHandler>();
        services.AddScoped<IRequestHandler<UpdateLocationCommand, Location>, UpdateLocationCommandHandler>();
        
        services.AddScoped<IRequestHandler<UpdateReviewCommand, Review>, UpdateReviewCommandHandler>();

        services.AddScoped<IUserService, UserService>();

        return services;
    }
}