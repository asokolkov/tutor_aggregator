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
        services.AddScoped<ICrudRepository<Tutor>, TutorsRepository>();
        services.AddScoped<ICrudRepository<Award>, AwardsRepository>();
        services.AddScoped<ICrudRepository<Contact>, ContactsRepository>();
        services.AddScoped<ICrudRepository<Education>, EducationsRepository>();
        
        var connectionString = configuration.GetConnectionString("Postgres");
        services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(connectionString));
        services.AddMediatR(typeof(Program));
        services.AddAutoMapper(opt => opt.AddProfile<V1Profile>());
        return services;
    }
}