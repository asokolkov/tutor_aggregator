namespace SPA.Extensions;

using Data;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;
using Repositories.Impl;

internal static class ServiceCollectionExtensions
{
    public static IServiceCollection SetUpServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<ICrudRepository<Tutor>, TutorsRepository>();
        services.AddDbContext<ApplicationContext>(options =>
            options.UseNpgsql(configuration.GetConnectionString("Postgres")));
        return services;
    }
}