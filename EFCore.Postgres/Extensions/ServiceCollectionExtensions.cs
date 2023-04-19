using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EFCore.Postgres.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddApplicationContext(this IServiceCollection services, string connectionString)
    {
        services.AddDbContext<ApplicationContext>(config =>
            config.UseNpgsql(
                connectionString,
                o => { o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery); }));
        return services;
    }

    public static IServiceCollection AddApplicationContext(this IServiceCollection services, string connectionString,
        string migrationAssembly)
    {
        services.AddDbContext<ApplicationContext>(config =>
            config.UseNpgsql(
                connectionString,
                o =>
                {
                    o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
                    o.MigrationsAssembly(migrationAssembly);
                }));
        return services;
    }

    public static IServiceCollection AddIdentityContext(this IServiceCollection services, string connectionString)
    {
        services.AddDbContext<ApplicationIdentityContext>(config =>
            config.UseNpgsql(connectionString));
        return services;
    }

    public static IServiceCollection AddIdentityContext(this IServiceCollection services, string connectionString,
        string migrationAssembly)
    {
        services.AddDbContext<ApplicationIdentityContext>(config =>
            config.UseNpgsql(connectionString,
                o => { o.MigrationsAssembly(migrationAssembly); }));
        return services;
    }
}