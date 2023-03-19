namespace Tools.DataGenerator;

using DataGeneration;
using EFCore.Postgres.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

public sealed class Program
{
    public static async Task Main()
    {
        var configuration = new ConfigurationBuilder()
            .AddUserSecrets<Program>()
            .Build();

        var applciationConnectionString = configuration.GetConnectionString("Application");
        var identityConnectionString = configuration.GetConnectionString("Identity");

        var services = new ServiceCollection();
        services
            .AddIdentityContext(identityConnectionString)
            .AddApplicationContext(applciationConnectionString);

        services.AddScoped<IDataGenerator, DataGenerator>();

        var serviceProvider = services.BuildServiceProvider();
        var dataGenerator = serviceProvider.GetRequiredService<IDataGenerator>();
        await dataGenerator.FillDatabase();
    }
}