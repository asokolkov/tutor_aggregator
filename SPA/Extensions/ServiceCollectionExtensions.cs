using System.Reflection;
using SPA.Application.Queries;
using SPA.Application.Queries.Add;
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
        services.AddTransient<IRequestHandler<AddQuery<Student>, Student>, AddQueryHandler<Student>>();
        services.AddTransient<IRequestHandler<UpdateQuery<Student>, Student>, UpdateQueryHandler<Student>>();

        return services;
    }
}