namespace Tools.DataGenerator;

using DataGeneration;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Extensions;
using EFCore.Postgres.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Services;

public sealed class Program
{
    public static async Task Main()
    {
        var configuration = new ConfigurationBuilder()
            .AddUserSecrets<Program>()
            .Build();

        var applicationConnectionString = configuration.GetConnectionString("Application");
        var identityConnectionString = configuration.GetConnectionString("Identity");

        var services = new ServiceCollection();
        services
            .AddIdentityContext(identityConnectionString)
            .AddApplicationContext(applicationConnectionString);

        services.AddScoped<IDataGenerator, DataGenerator>();
        services.AddScoped<IDatabaseCleaner, DatabaseCleaner<ApplicationContext>>();
        services.AddScoped<IDatabaseCleaner, DatabaseCleaner<ApplicationIdentityContext>>();

        var serviceProvider = services.BuildServiceProvider();
        var dataGenerator = serviceProvider.GetRequiredService<IDataGenerator>();
        var cleaners = serviceProvider.GetRequiredService<IEnumerable<IDatabaseCleaner>>();

        foreach (var cleaner in cleaners)
        {
            await cleaner.CleanupDatabase();
        }
        await dataGenerator.FillDatabase();
    }
}