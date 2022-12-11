using SPA.Application.Queries.Get;
using SPA.Application.Queries.GetPage;
using SPA.Application.Queries.Update;

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
        
        services.AddTransient<IRequestHandler<GetPageQuery<Student>, Page<Student>>, GetPageQueryHandler<Student>>();
        services.AddTransient<IRequestHandler<GetQuery<Student>, Student>, GetQueryHandler<Student>>();
        services.AddTransient<IRequestHandler<UpdateQuery<Student>, Student>, UpdateQueryHandler<Student>>();
        
        services.AddTransient<IRequestHandler<GetPageQuery<Tutor>, Page<Tutor>>, GetPageQueryHandler<Tutor>>();
        services.AddTransient<IRequestHandler<GetQuery<Tutor>, Tutor>, GetQueryHandler<Tutor>>();
        services.AddTransient<IRequestHandler<UpdateQuery<Tutor>, Tutor>, UpdateQueryHandler<Tutor>>();
        
        services.AddTransient<IRequestHandler<GetPageQuery<Subject>, Page<Subject>>, GetPageQueryHandler<Subject>>();
        services.AddTransient<IRequestHandler<GetQuery<Subject>, Subject>, GetQueryHandler<Subject>>();
        services.AddTransient<IRequestHandler<UpdateQuery<Subject>, Subject>, UpdateQueryHandler<Subject>>();

        
        return services;
    }
}